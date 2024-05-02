import{u as o,a as n}from"./CR6biniB.js";import{c as i,a as e,t,g as a,d as s,o as c}from"./B-A5kHBA.js";const r={class:"blog-page"},l=a('<h2 class="blog-title">React JS for Vue Devs,</h2><hr class="py-7 border-blue border-opacity-50"><a class="text-xs text-blue font-light" href="https://prismjs.com/index.html#credits">Syntax highlighting with PrismJS</a><h2 class="text-2xl pr-4 lg:text-5xl uppercase text-yellow-400 font-medium py-12">not completed(content, grammer, tone ⚠️)</h2><h4 class="b-t">What is ?</h4><p class="b-p"> React is a library. means it has a narrow scope. simply a precompiled, well-defined collection of functions to perform a specific operations. we call the library and we use it as we want. it use for dynamically render the ui. which use an virtual dom. when the state of the virtual dom changes, it according re render the real dom/ui. because of react is a library it isn&#39;t tight to web and it has no deal with browser. to make it work in a browser environment we need to use reactdom package. which is what gives react the power to access the browser dom. basically it can use to built many dynamic uis. example mobile apps, desktop apps ...etc. <br><br> Vue is a frammework. means it has almost everything it need, built in to itseslf. framework has the control of our application / framework calls the our code and we need to the built our applications in a certain way that framework can understood. Because vue is framework there is no big hustle in setting up and configuring it to work. It works so well. vue is also using a virtual dome. but there is a experimental ways that tries to eliminate the virtual dom and use the real/native dom instead. vue is faster compared to react. Performance isn&#39;t so important at most most cases but its a win. vue also has ways to built other type of applications than frontends, such as terminals. </p><p class="b-p"> When we write react we basically write javascript, functions which simply returns html. we have to write all the css and html inside js code. so we cant use keywords like `class` in react. because they are reserved keywords in js. its not the only thing that changes here. we can write react in js files or jsx files. jsx is basically js optimized to write html and css all alonge. functions which accept many arguments. argument accept as a object so we can ues object destructuring to destructure them for easy use. <br><br> basic idea is something like this, </p>',7),p=e("p",{class:"b-p"},[s(" When we write vue we write single file comopnents (sfc) in .vue files. we can use html approche too. but ... this is the standard way. in a component file we can write a script tag, html tag and a css tag. make much sense compared to react. we can define data, functions in js tagand access them in html and use styles in css tag. vue has a compiler. so vue is going to compile our code to a suitable way to render it inside the dom. "),e("br"),e("br"),s(" basic idea is something like this, ")],-1),h=a(`<h4 class="b-t">Setup &amp; Structure</h4><p class="p-b"> To spin up a new project use these commands. </p><pre><code class="language-bash">npm create vue@latest</code></pre><pre><code class="language-bash">npm create vite@latest
# then select react
        </code></pre><p class="b-p"> In both vue and react projects there is a src folder and it have 2 main files. In vue it will be main.js and App.vue. In react it will be main.js and App.js. main.js files have the code to configure the app and code to the mount the in dom. Vue will mount on a div that has the id #app and react will mount on a div which has the id #root. pretty basic. App.vue or App.js files contains the visible app. we can part this in to navbars,footers and a another part for the page view. so when the route changes only the page view part going to chnage. vue has a built in component called &lt;RouterView /&gt; and react doesnt. If you select the vue-router option when creating the project, you have acces to RouterLink component, which you can use like &lt;RouterLink to=&quot;/&quot;&gt;Home&lt;/RouterLink&gt; to create navigations. We can install react-router-dom package and then use &lt;Routes&gt;&lt;/Routes&gt; component. whithin this tag we can define all the pages our app have whithin Route tags like &lt;Route path=&quot;/&quot; element={&lt;HomePage /&gt;} /&gt;. Using RouterLink or Route tag is essential insted of using an a (anchor) to kepp the single page application behavior. Otherwise the application will be fully reload again and again. Routing is a big topic so i wont cover it here. </p><hr class="py-12"><h4 class="b-t">01. Template components</h4><p class="p-b">This is the basic shape of a reusable components which simply returns a html code. In a vue template we can define few elements but in react all the elements must be nested in a one component. We can use a element like a div for this or this &lt;&gt;&lt;/&gt; empty syntax for that. </p><span class="code-tag">vue</span>`,9),d=e("span",{class:"code-tag"},"react",-1),u=e("h4",{class:"b-t"},"02. Props reciver components",-1),m=e("p",{class:"p-b"},"Props are the data that passed to the components. In vue reactivity is managed via js proxys. So If we want to access props value whithin the script tag, we have to put the .value after the prop name. In template it works normally. We can change this with librariy like UseVue if we want. In react props are just parameters passed to the function, hence its just a function as i mentioned above. Inside the function we can access these values via the argument name we defind or destructure it for easy use. I have mentioned this very above What is ? section.",-1),v=e("span",{class:"code-tag"},"vue",-1),g=e("span",{class:"code-tag"},"react",-1),f=e("h4",{class:"b-t"},"03. Props passer components",-1),w=e("p",{class:"p-b"},"We can pass data to child component like html attributes. In vue we put : before the attribute name.",-1),b=e("span",{class:"code-tag"},"vue",-1),y=e("span",{class:"code-tag"},"react",-1),_=e("h4",{class:"b-t"},"04. Styled componentes",-1),x=e("p",{class:"p-b"},"To pass styles to the child just add them as a normal html style attribute in vue. These styles are going to fall back to the child. In react there is no separate way and we have to do it in props way.",-1),C=e("span",{class:"code-tag"},"vue",-1),k=e("span",{class:"code-tag"},"react",-1),j=e("h4",{class:"b-t"},"05. Dynamic styled componentes",-1),I=e("p",{class:"p-b"},"In vue if we add : before class and style attributes, we can add js logic to them. Inreact we cant use keywords like class as I previously mentiond, and following is a way. ",-1),S=e("span",{class:"code-tag"},"vue",-1),P=e("span",{class:"code-tag"},"react",-1),R=e("h4",{class:"b-t"},"06. Dynamic rendering (if)",-1),D=e("p",{class:"p-b"},"Vue has v-if, v-show directives. In react its just js ",-1),T=e("span",{class:"code-tag"},"vue",-1),V=e("span",{class:"code-tag"},"react",-1),W=e("h4",{class:"b-t"},"07. Dynamic rendering (if else)",-1),A=e("p",{class:"p-b"},"Vue has v-if-else, v-else directives. In react its just js ",-1),M=e("span",{class:"code-tag"},"vue",-1),E=e("span",{class:"code-tag"},"react",-1),F=e("h4",{class:"b-t"},"08. List rendering",-1),H=e("p",{class:"p-b"},"Vue has v-for directive. In react use a js loop or map, filter, reduce like array method. Don't forget to add a key attribute to keep the reactivity. key can be dynamically bind as shown. ",-1),N=e("span",{class:"code-tag"},"vue",-1),B=e("span",{class:"code-tag"},"react",-1),L=e("h4",{class:"b-t"},"09. Define state",-1),U=e("p",{class:"p-b"},"In vue there are two ways to define reactive variabls. ref and reactive are thoses. in here i use ref. Because of vue depend on js proxies, when we access the value of these varibales whithin script tag we have to use .value after the variable name. I said this above. In react we need to use hooks. Hooks are provided by the react library. To define a reactive value we have to destructure to values from the useState array. First valu is the reactive value and the second is a function to change the reactive value. Commonly we name this function like set+ReactivVariableName. Defaults values can define as the parameters of the ref or useState functions and which can be any type of a object like string, array,.... ",-1),J=e("span",{class:"code-tag"},"vue",-1),O=e("span",{class:"code-tag"},"react",-1),$=e("h4",{class:"b-t"},"10. Two way data binding",-1),q=e("p",{class:"p-b"},"Vue has a straight forward v-model directive which can bind the value of state while in react we have to annoyingly bind state separately and add a event handler separately.",-1),Y=e("span",{class:"code-tag"},"vue",-1),z=e("span",{class:"code-tag"},"react",-1),G=e("h4",{class:"b-t"},"11. Computed properties",-1),K=e("p",{class:"p-b"},"Same as above vue has computed properties for this. In react we have figure out a way in js. This can affect the performance so there is a useMemo hook too. This is the total behaviour of js anyway. Many stupid ways to get the same result. ",-1),Q=e("span",{class:"code-tag"},"vue",-1),X=e("span",{class:"code-tag"},"react",-1),Z=e("h4",{class:"b-t"},"12. Methods & events",-1),ee=e("p",{class:"p-b"},"In vue we have v-on directives. We can simply write @ insted of this which is easy. We can chain .prevent methods to stop the default behavior and there ara other chainable methods too. Check the docs. In react we can write events like html attributes whith slightly different syntax. Just press ctrl + space in your vscode in any case to get suggestion so its easy to deal with.",-1),te=e("span",{class:"code-tag"},"vue",-1),ae=e("span",{class:"code-tag"},"react",-1),se=e("h4",{class:"b-t"},"13. Watchers",-1),oe=e("p",{class:"p-b"},"Watchers watching a reactive state and runs when the value changes. Vue has built in watchers and in react we have to use another hook called useEffect. Which is commanly known as the useFootGun hook. I really dont want to explain this hook here.",-1),ne=e("span",{class:"code-tag"},"vue",-1),ie=e("span",{class:"code-tag"},"react",-1),ce=e("h4",{class:"b-t"},"14. Slots",-1),re=e("p",{class:"p-b"},"Slots are powerfull components. We can pass a complete element in to a another element in this way and also define a fall back valu if a element didnt get passed. Vue has a slot component for this and in react we have nothing again. We can pass a element a prop if we want. ",-1),le=e("span",{class:"code-tag"},"vue",-1),pe=e("span",{class:"code-tag"},"react",-1),he=e("h4",{class:"b-t"},"15. Provide & inject",-1),de=e("p",{class:"p-b"},"If we want to pass the reactive state of a component in to a deeply nested component easily we use provide and inject. Vue has a straight forward way to do this but in react we have to use another hook called useContext. Which is a powerfull one.",-1),ue=e("span",{class:"code-tag"},"vue",-1),me=e("span",{class:"code-tag"},"react",-1),ve=e("h4",{class:"b-t"},"16. Pass date from child to parent",-1),ge=e("p",{class:"p-b"},"Passing data from a child to parent is a primary need. Bue use emits for this. we can emit from the child and recive that emit as a event on a parent easily. In react there is no easy method for this but we can use a callback function as below. There is a other way to achive this behaviour using useContext hook. And badly more other ways too. ",-1),fe=e("span",{class:"code-tag"},"vue",-1),we=e("span",{class:"code-tag"},"react",-1),be=a('<h4 class="b-t">Life Cycle Hooks</h4><p class="italic font-light text-sm">Vue has built in methods liike onMounted, onBeforeMount... to manage the life cycle. In react we have to rely on hooks like useEffect which is super bad. Older days when react use class based components react also had onMounted like hooks which is not resented in modern react. This also a quite a topic for a another article.</p><h4 class="b-t">State Management</h4><p class="italic font-light text-sm">Vue have lovely library called pinia 🍍 for global state management. We can select this option in terminal when we create the project. Even without this we can use built in reactive methods in vue to built a nice globaal store. In react there is library called redux which is dynamically changing over time. It&#39;s noway close to dx which pinia offers. This will be cover in a separate article. </p><h4 class="b-t">Meta Frameworks</h4><p class="italic font-light text-sm">Meta frameworks are the frameworks built on top of another framework. Vue has Nuxt which has the best dx I experienced across all the frameworks and React has Next and remix like frameworks. These Frameworks trying to solve the problems of base frameworks and actually it does that. NuxtJs like work basically can built anything from spa, full stack app to a rest api if you want. NextJs built by vercel and I have seen devs complaining about deploying Next project outside vercel is being hard.</p><h4 class="b-t">Usage And What To Love ?</h4><p class="italic font-light text-sm">When it come to dx vue has lot more to offer than react. When it come to usage react has the uperhand, at least in western countries. Both are battle tested mature frameworks. Vue is backed by Evan You the greate creator of the framework and other open source developrs. React is backed by Meta/facebook. What a developer will like depends on their preferences and how big slave they are. Most of the time No matter what you like, you will have to go against your preferences in this life! And it&#39;s a fact. </p>',8),ye=`function btn(data){
    return (
        \`<button> \${data.text}</button>\`
    )
}

// using destructuring
function btn({data}){
    return (
        \`<button> \${text}</button>\`
    )
}`,_e=`<script setup>
let data ='Vue is lovely'
<\/script>

<template>
    <h1>{{data}}</h1>
</template>

<styles scooped>
<styles>`,xe=`<template>
    <h2>Components</h2>
</template>`,Ce=`const TemplateComponent = () => {
    return (
        <div>
            <h2>Templates !</h2>
        </div>
    )
}
export default TemplateComponent`,ke=`<script setup>
const props = defineProps({
 text: String
})
console.log(text.value)
<\/script>
<template>
    <h2>text is {{ text }}</h2> 
</template>
`,je=`const PropsReceiverComponent = ({ name }) => {
    return (
        <div>
            <h2>{name}</h2>
        </div>
    )
}
export default PropsReceiverComponent`,Ie=`<template>
    <PropsReciverComponent :text="'Vue is Lovely'"/> 
</template>`,Se=`const PropsPasserComponent = () => {
    return (
        <div>
            <PropsReceiverComponent name={"Vue Js"}/>
        </div>
    )
}
export default PropsPasserComponent`,Pe=`<template>
    <PropsReciverComponent style="height: 100dvh;" class="bg-cyan-700"/> 
</template>`,Re=`const StyleComponent = ({ styles, cssClasses }) => {
    return (
          <div style={styles} className={cssClasses}>
                <h2>Styles</h2>
          </div>
    )
}
export default StyleComponent`,De=`<template>
    <h2 :class="true ? 'bg-green' : 'bg-red'"></h2>
    <h2 :style="\`background: \${true ? 'green' : 'red'};\`"></h2>
</template>
`,Te=`const DynamicStyleComponent = () => {
    return (
        <>
            <h2 style={{ background: true ? 'green' : 'red', }} ></h2>
            <h2 className={\`\${true ? "bg-green" : "bg-red"}\`}></h2>
        </>
    )
}

export default DynamicStyleComponent`,Ve=`<script setup>
const props = defineProps({
      show: Boolean
})
<\/script>
<template>
    <div>
          Below span,
          <span v-if="show"> If true Will be shown </span>
    </div>
</template>`,We=`const IfComponent = ({ isReactACurse }) => {
    // First way,
    if (isReactACurse) return <h2>Yes it is !</h2> 

    // Second way,
    return (     
          <div>
                {isReactACurse && <h2>Yes it is !</h2>}
          </div>
    )
}
export default IfComponent`,Ae=`<script setup>
const props = defineProps({
    show: Boolean
})
<\/script>
<template>
    <div>
        Below span,
        <span v-if="show"> If true Will be shown </span>
        <span v-else>Otherwise this one will be shown</span>
    </div>
</template>`,Me=`const IfElseComponent = ({ isReactACurse }) => {
    // First way,
    if (isReactACurse) { return <h2>Yes it is !</h2> }
    else { return <h2>He Don't know Vue yet !</h2> }

    // Second way,
    return (    
        <div>
            {isReactACurse ? (
                <h2>Yes it is !</h2>
            ) : (
                <h2>He Don't know Vue yet !</h2>
            )
            }
        </div>
    )
}
export default IfElseComponent`,Ee=`<script setup>
const props = defineProps({
    dataArray: Array
})
<\/script>
<template>
    <div>
        <span v-for="d in dataArray" :key="d.id"> {{ d.text }} </span>
    </div>
</template>`,Fe=` // One way (popular),
const ListRenderingComponent = ({ itemArray }) => {
    return (
        <div>
            {itemArray.map((i) => (
                <li key={i?.id} > {i?.text} </li>
            ))}
        </div>
    )
}

export default ListRenderingComponent

// Another way,
const ListRenderingComponent = ({ itemArray }) => {
    return (
        <div>
            {itemArray.forEach(element => {
                <h2>{element}</h2>
            })}
        </div>
    )
}
export default ListRenderingComponent`,He=`<script setup>
import { ref } from 'vue'

const text = ref('EDGE of Horizon')
console.log(text.value)

<\/script>

<template>
    <h2>{{ text }}</h2>
</template>`,Ne=`import { useState } from "react"
const StateComponent = () => {
    const [text, setText] = useState('')
    console.log(text)

    return (
        <div>
            {text}
            <button onClick={() => setText('Pain is react !')}>Secret Here !</button>
        </div>
    )
}
export default StateComponent`,Be=`<script setup>
const text = ref('')
<\/script>
<template>
    <h2>{{ text }}</h2>
    <input type="text" v-model="text">
</template>`,Le=`import { useState } from "react"
const TwoWayDataBindingComponent = () => {
    const [txt, setTxt] = useState('')
    return (
        <div>
            <h2> {txt} </h2>
            <input type="text" value={txt} onChange={(e) => setTxt(e.target.value)} />
        </div>
    )
}
export default TwoWayDataBindingComponent`,Ue=`<script setup>
import { computed, ref } from 'vue'

const text = ref('EDGE of Horizon')
const niceText = computed(()=> text.value.toUpperCase())
<\/script>

<template>
    <h2>{{ niceText }}</h2>
</template>`,Je=`import { useMemo } from "react"
const ComputedPropertiesComponent = () => {
    const msg = "React is a painful library that make no sense ! But the popularity keep the community ! Too bad :("
    // First way,
    const computerMsg = msg.split(" ").join("\\n")
    // If performance matter, (If use vue, LOL !)
    const computerMsg_ = useMemo(() => msg.split(" ").join("\\n"), [msg])
    return (
        <div>
            <h2> {computerMsg} </h2>
            <h2> {computerMsg_} </h2>
        </div>
    )
}
export default ComputedPropertiesComponent`,Oe=`<script setup>
const something = () => {
    alert('Clicked')
}
<\/script>

<template>
    <button v-on:click="something">Click Here !</button>
    <button @click.prevent="something">Click Here !</button>
</template>`,$e=`const MethodsAndEventsComponent = () => {
    const yourMethod = (event, name) => {
        // Events Modifiers,
        // Not easy as vue,
        event.preventDefault()
        alert(\`Say hi \${name}\`)
    }
    return (
        <div>
            {/* Events, */}
            <button onClick={alert(\`Event triggered !\`)}>Click Here !</button>
            <button onInput={alert(\`Event triggered !\`)}>Click Here !</button>
            <button onChange={alert(\`Event triggered !\`)}>Click Here !</button>
            {/* Methods, */}
            <button onClick={yourMethod(event, \`Thousand Falcon\`)}>Click Here !</button>
        </div>
    )
}
export default MethodsAndEventsComponent`,qe=`<script setup>
import { ref, watch } from 'vue'

const count = ref(0)
watch(count, () => console.log(\`new count is: \${count.value}\`))

const countUp = () => {
    count.value++
}
<\/script>

<template>
    <button @click="countUp">Click Here {{ count }}</button>
</template>
`,Ye=`import { useEffect } from "react"
import { useState } from "react"
const WatchersComponent = () => {
    const [num, setNum] = useState(0)
    useEffect(() => {
        alert(num)
    }, [num])
    return (
        <div>
            {num}
            <button onClick={() => setNum(Math.floor(Math.random() * 100))}>Click Here !</button>
        </div>
    )
}
export default WatchersComponent`,ze=`<template>
    <div>
        This is a slot,
        <slot>
            Fallback value will display here if no data passed,
        </slot>
    </div>
</template>
`,Ge=`const SlotsComponent = ({ childElement }) => {
    return (
        <div>
            <h2>This library has no way of doing that !</h2>
            <h3>Be happy with this bro !</h3>
            <hr />
            {childElement}
        </div>
    )
}
export default SlotsComponent`,Ke=`// Provider,
<script setup>
import { ref, provide } from 'vue';
const count = ref(0)

provide('count', count)
<\/script>

// Reciver,
<script setup>
import { inject } from 'vue';
const count = inject('count')
<\/script>

<template>
    <div>{{ count }}</div>
</template>
`,Qe=`import { useContext } from "react"
import { createContext } from "react"
const ProvideAndInjectComponent = ({ childComponent }) => {
    const providingContext = createContext("Und3fin3d")
    return (
        <providingContext.Provider value="Und3fin3d">
            {childComponent}
        </providingContext.Provider>
    )
}
const childComp = () => {
    const injectedValue = useContext(providingContext)
    return <h2> {injectedValue} </h2>
}
export default ProvideAndInjectComponent`,Xe=`// Child,
<script setup>
const emit = defineEmits(['passData'])

emit('passData', 'hello !')
<\/script>

// Parent,
<script setup>
import { ref } from 'vue'
import Child from './Child.vue'

const childData = ref('No data passed yet,')
<\/script>

<template>
  <Child @passData="(txt) => childData = txt" />
  <p>{{ childData }}</p>
</template>`,Ze=`import React, { useState } from 'react'
import ChildComponent from './ChildComponent'
const ParentComponent = () => {
    const [dataFromChild, setDataFromChild] = useState('');
    const handleDataFromChild = (data) => {
        setDataFromChild(data);
    }
    return (
        <div>
            <h3>ParentComponent</h3>
            <ChildComponent onDataFromChild={handleDataFromChild} />
            <p>Data From Child: {dataFromChild}</p>
        </div>
    )
}


import React, { useState } from 'react'
export const ChildComponent = ({ onDataFromChild }) => {
    const [inputValue, setInputValue] = useState('');
    const sendDataToParent = () => {
        onDataFromChild(inputValue)
    }
    return (
        <div>
            <h2>ChildComponent</h2>
            <input type="text" onChange={(e) => setInputValue(e.target.value)} />
            <button onClick={sendDataToParent}>Send Data to Parent</button>
        </div>
    )
}
export default ParentComponent`,nt={__name:"VueOverReact",setup(et){return o({title:"React js for Vue js developers",contentType:"text/html; charset=utf-8",author:"Nalinda Dissanayake",articleAuthor:"Nalinda Dissanayake",articlePublishedTime:"2024.04.24",articleTag:["vuejs","reactjs","frontend","vuejs for react developers","react for vuejs developers"]}),n({script:[{src:"/prism.js"}],link:[{rel:"stylesheet",href:"/prism.css"}]}),(tt,at)=>(c(),i("div",r,[l,e("pre",null,[e("code",{class:"language-javascript"},t(ye))]),p,e("pre",null,[e("code",{class:"language-javascript"},t(_e))]),h,e("pre",null,[e("code",{class:"language-javascript"},t(xe))]),d,e("pre",null,[e("code",{class:"language-jsx"},t(Ce))]),u,m,v,e("pre",null,[e("code",{class:"language-javascript"},t(ke))]),g,e("pre",null,[e("code",{class:"language-jsx"},t(je))]),f,w,b,e("pre",null,[e("code",{class:"language-javascript"},t(Ie))]),y,e("pre",null,[e("code",{class:"language-jsx"},t(Se))]),_,x,C,e("pre",null,[e("code",{class:"language-javascript"},t(Pe))]),k,e("pre",null,[e("code",{class:"language-jsx"},t(Re))]),j,I,S,e("pre",null,[e("code",{class:"language-javascript"},t(De))]),P,e("pre",null,[e("code",{class:"language-jsx"},t(Te))]),R,D,T,e("pre",null,[e("code",{class:"language-javascript"},t(Ve))]),V,e("pre",null,[e("code",{class:"language-jsx"},t(We))]),W,A,M,e("pre",null,[e("code",{class:"language-javascript"},t(Ae))]),E,e("pre",null,[e("code",{class:"language-jsx"},t(Me))]),F,H,N,e("pre",null,[e("code",{class:"language-javascript"},t(Ee))]),B,e("pre",null,[e("code",{class:"language-jsx"},t(Fe))]),L,U,J,e("pre",null,[e("code",{class:"language-javascript"},t(He))]),O,e("pre",null,[e("code",{class:"language-jsx"},t(Ne))]),$,q,Y,e("pre",null,[e("code",{class:"language-javascript"},t(Be))]),z,e("pre",null,[e("code",{class:"language-jsx"},t(Le))]),G,K,Q,e("pre",null,[e("code",{class:"language-javascript"},t(Ue))]),X,e("pre",null,[e("code",{class:"language-jsx"},t(Je))]),Z,ee,te,e("pre",null,[e("code",{class:"language-javascript"},t(Oe))]),ae,e("pre",null,[e("code",{class:"language-jsx"},t($e))]),se,oe,ne,e("pre",null,[e("code",{class:"language-javascript"},t(qe))]),ie,e("pre",null,[e("code",{class:"language-jsx"},t(Ye))]),ce,re,le,e("pre",null,[e("code",{class:"language-javascript"},t(ze))]),pe,e("pre",null,[e("code",{class:"language-jsx"},t(Ge))]),he,de,ue,e("pre",null,[e("code",{class:"language-javascript"},t(Ke))]),me,e("pre",null,[e("code",{class:"language-jsx"},t(Qe))]),ve,ge,fe,e("pre",null,[e("code",{class:"language-javascript"},t(Xe))]),we,e("pre",null,[e("code",{class:"language-jsx"},t(Ze))]),be]))}};export{nt as default};
