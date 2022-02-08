"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6722],{58215:function(e,t,n){var a=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},55064:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(87462),r=n(67294),l=n(72389),u=n(79443);var o=function(){var e=(0,r.useContext)(u.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=n(83039),s=n(86010),c="tabItem_vU9c";function p(e){var t,n,a,l=e.lazy,u=e.block,p=e.defaultValue,d=e.values,m=e.groupId,h=e.className,f=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=d?d:f.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),b=(0,i.lx)(v,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===p?p:null!=(t=null!=p?p:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(a=f[0])?void 0:a.props.value;if(null!==g&&!v.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=o(),y=k.tabGroupChoices,T=k.setTabGroupChoices,w=(0,r.useState)(g),P=w[0],N=w[1],x=[],E=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var L=y[m];null!=L&&L!==P&&v.some((function(e){return e.value===L}))&&N(L)}var Z=function(e){var t=e.currentTarget,n=x.indexOf(t),a=v[n].value;a!==P&&(E(t),N(a),null!=m&&T(m,a))},C=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=x.indexOf(e.currentTarget)+1;n=x[a]||x[0];break;case"ArrowLeft":var r=x.indexOf(e.currentTarget)-1;n=x[r]||x[x.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":u},h)},v.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:P===t?0:-1,"aria-selected":P===t,className:(0,s.Z)("tabs__item",c,{"tabs__item--active":P===t}),key:t,ref:function(e){return x.push(e)},onKeyDown:C,onFocus:Z,onClick:Z},null!=n?n:t)}))),l?(0,r.cloneElement)(f.filter((function(e){return e.props.value===P}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==P})}))))}function d(e){var t=(0,l.Z)();return r.createElement(p,(0,a.Z)({key:String(t)},e))}},67523:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return d},default:function(){return h}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),u=n(55064),o=n(58215),i=["components"],s={id:"features",slug:"/",title:"GraphQLite",sidebar_label:"GraphQLite",original_id:"features"},c=void 0,p={unversionedId:"features",id:"version-4.1/features",isDocsHomePage:!1,title:"GraphQLite",description:"A PHP library that allows you to write your GraphQL queries in simple-to-write controllers.",source:"@site/versioned_docs/version-4.1/features.mdx",sourceDirName:".",slug:"/",permalink:"/docs/4.1/",editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/versioned_docs/version-4.1/features.mdx",tags:[],version:"4.1",lastUpdatedBy:"Jakub Janata",lastUpdatedAt:1644319537,formattedLastUpdatedAt:"2/8/2022",frontMatter:{id:"features",slug:"/",title:"GraphQLite",sidebar_label:"GraphQLite",original_id:"features"},sidebar:"version-4.1/docs",next:{title:"Getting Started",permalink:"/docs/4.1/getting-started"}},d=[{value:"Features",id:"features",children:[],level:2},{value:"Basic example",id:"basic-example",children:[],level:2}],m={toc:d};function h(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",{align:"center"},(0,l.kt)("img",{src:"https://graphqlite.thecodingmachine.io/img/logo.svg",alt:"GraphQLite logo",width:"250",height:"250"})),(0,l.kt)("p",null,"A PHP library that allows you to write your GraphQL queries in simple-to-write controllers."),(0,l.kt)("h2",{id:"features"},"Features"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Create a complete GraphQL API by simply annotating your PHP classes"),(0,l.kt)("li",{parentName:"ul"},"Framework agnostic, but Symfony, Laravel and PSR-15 bindings available!"),(0,l.kt)("li",{parentName:"ul"},"Comes with batteries included: queries, mutations, mapping of arrays / iterators, file uploads, security, validation, extendable types and more!")),(0,l.kt)("h2",{id:"basic-example"},"Basic example"),(0,l.kt)("p",null,"First, declare a query in your controller:"),(0,l.kt)(u.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"php8",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"class ProductController\n{\n    #[Query]\n    public function product(string $id): Product\n    {\n        // Some code that looks for a product and returns it.\n    }\n}\n"))),(0,l.kt)(o.Z,{value:"php7",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"class ProductController\n{\n    /**\n     * @Query()\n     */\n    public function product(string $id): Product\n    {\n        // Some code that looks for a product and returns it.\n    }\n}\n")))),(0,l.kt)("p",null,"Then, annotate the ",(0,l.kt)("inlineCode",{parentName:"p"},"Product")," class to declare what fields are exposed to the GraphQL API:"),(0,l.kt)(u.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"php8",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"#[Type]\nclass Product\n{\n    #[Field]\n    public function getName(): string\n    {\n        return $this->name;\n    }\n    // ...\n}\n"))),(0,l.kt)(o.Z,{value:"php7",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"/**\n * @Type()\n */\nclass Product\n{\n    /**\n     * @Field()\n     */\n    public function getName(): string\n    {\n        return $this->name;\n    }\n    // ...\n}\n")))),(0,l.kt)("p",null,"That's it, you're good to go! Query and enjoy!"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-grapql"},"{\n  product(id: 42) {\n    name\n  }\n}\n")))}h.isMDXComponent=!0}}]);