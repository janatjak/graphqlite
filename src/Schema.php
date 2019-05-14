<?php


namespace TheCodingMachine\GraphQLite;

use GraphQL\Type\Definition\ObjectType;
use GraphQL\Type\Definition\Type;
use GraphQL\Type\SchemaConfig;
use TheCodingMachine\GraphQLite\Containers\BasicAutoWiringContainer;
use TheCodingMachine\GraphQLite\Mappers\RecursiveTypeMapperInterface;
use TheCodingMachine\GraphQLite\Mappers\Root\BaseTypeMapper;
use TheCodingMachine\GraphQLite\Mappers\Root\CompositeRootTypeMapper;
use TheCodingMachine\GraphQLite\Mappers\Root\RootTypeMapperInterface;
use TheCodingMachine\GraphQLite\Types\CustomTypesRegistry;
use TheCodingMachine\GraphQLite\Types\TypeResolver;

/**
 * A GraphQL schema that takes into constructor argument a QueryProvider.
 *
 * TODO: turn this into a SchemaFactory (cleaner than extending a class)
 */
class Schema extends \GraphQL\Type\Schema
{
    public function __construct(QueryProviderInterface $queryProvider, RecursiveTypeMapperInterface $recursiveTypeMapper, TypeResolver $typeResolver, SchemaConfig $config = null, RootTypeMapperInterface $rootTypeMapper = null)
    {
        if ($config === null) {
            $config = SchemaConfig::create();
        }

        if ($rootTypeMapper === null) {
            // For compatibility reasons with 3.0, the $rootTypeMapper parameter is optional.
            $rootTypeMapper = new BaseTypeMapper($recursiveTypeMapper);
        }

        $query = new ObjectType([
            'name' => 'Query',
            'fields' => function() use ($queryProvider) {
                $queries = $queryProvider->getQueries();
                if (empty($queries)) {
                    return [
                        'dummyQuery' => [
                            'type' => Type::string(),
                            'description' => 'A placeholder query used by thecodingmachine/graphqlite when there are no declared queries.',
                            'resolve' => function () {
                                return 'This is a placeholder query. Please create a query using the @Query annotation.';
                            }
                        ]
                    ];
                }
                return $queries;
            }
        ]);
        $mutation = new ObjectType([
            'name' => 'Mutation',
            'fields' => function() use ($queryProvider) {
                $mutations = $queryProvider->getMutations();
                if (empty($mutations)) {
                    return [
                        'dummyMutation' => [
                            'type' => Type::string(),
                            'description' => 'A placeholder query used by thecodingmachine/graphqlite when there are no declared mutations.',
                            'resolve' => function () {
                                return 'This is a placeholder mutation. Please create a mutation using the @Mutation annotation.';
                            }
                        ]
                    ];
                }
                return $mutations;
            }
        ]);

        $config->setQuery($query);
        $config->setMutation($mutation);

        $config->setTypes(function() use ($recursiveTypeMapper) {
            return $recursiveTypeMapper->getOutputTypes();
        });

        $config->setTypeLoader(function(string $name) use ($recursiveTypeMapper, $query, $mutation, $rootTypeMapper) {
            // We need to find a type FROM a GraphQL type name
            if ($name === 'Query') {
                return $query;
            }
            if ($name === 'Mutation') {
                return $mutation;
            }

            $type = $rootTypeMapper->mapNameToType($name);
            if ($type !== null) {
                return $type;
            }

            return $recursiveTypeMapper->mapNameToType($name);
        });

        $typeResolver->registerSchema($this);

        parent::__construct($config);
    }
}