import{u as o,a as i}from"./BmOx3895.js";import{c as r,a as e,e as a,t as s,h as n,o as l}from"./DJvrapJU.js";const d={class:"blog-page article"},p=`<script setup>
let data ='Vue is green'
<\/script>

<template>
    <h1>{{data}}</h1>
</template>

<styles scooped>
<styles>`,c=`function btn(){
    let data = 'React is blue'
    return (
        \`<button> \${data}</button>\`
    )
}

// using destructuring
function btn({data}){
    return (
        \`<button> \${text}</button>\`
    )
}`,u=`<template>
    <h2>Say hi ...!</h2>
</template>`,m=`const TemplateComponent = () => {
    return (
        <div>
            <h2>Say hi ...!</h2>
        </div>
    )
}
export default TemplateComponent`,h=`<script setup>
const props = defineProps({
 text: String
})
console.log(text.value)
<\/script>
<template>
    <h2>text is {{ text }}</h2> 
</template>
`,v=`const PropsReceiverComponent = ({ text }) => {
    return (
        <div>
            <h2>{text}</h2>
        </div>
    )
}
export default PropsReceiverComponent`,g=`<template>
    <PropsReciverComponent :text="'Vue is green'"/> 
</template>`,b=`const PropsPasserComponent = () => {
    return (
        <div>
            <PropsReceiverComponent text={"React is blue"}/>
        </div>
    )
}
export default PropsPasserComponent`,f=`<template>
    <PropsReciverComponent style="height: 100dvh;" class="bg-cyan-700"/> 
</template>`,w=`const StyleComponent = ({ styles, cssClasses }) => {
    return (
          <div style={styles} className={cssClasses}>
                <h2>Styles</h2>
          </div>
    )
}
export default StyleComponent`,y=`<template>
    <h2 :class="true ? 'bg-green' : 'bg-red'"></h2>
    <h2 :style="\`background: \${true ? 'green' : 'red'};\`"></h2>
</template>
`,x=`const DynamicStyleComponent = () => {
    return (
        <>
            <h2 style={{ background: true ? 'green' : 'red', }} ></h2>
            <h2 className={\`\${true ? "bg-green" : "bg-red"}\`}></h2>
        </>
    )
}

export default DynamicStyleComponent`,k=`<script setup>
const props = defineProps({
      show: Boolean
})
<\/script>
<template>
    <div>
          <span v-if="show"> If true Will be shown </span>
    </div>
</template>`,C=`const IfComponent = ({ show }) => {
    // First way,
    if (show) return <h2>If true Will be shown</h2> 

    // Second way,
    return (     
          <div>
                {show && <h2>If true Will be shown</h2>}
          </div>
    )
}
export default IfComponent`,S=`<script setup>
const props = defineProps({
    show: Boolean
})
<\/script>
<template>
    <div>
        <span v-if="show"> If true Will be shown </span>
        <span v-else>Else this one will be shown</span>
    </div>
</template>`,R=`const IfElseComponent = ({ show }) => {
    // First way,
    if (show) { return <h2> If true Will be shown </h2> }
    else { return <h2>Else this one will be shown</h2> }

    // Second way,
    return (    
        <div>
            {show ? (
                <h2> If true Will be shown</h2>
            ) : (
                <h2>Else this one will be shown</h2>
            )
            }
        </div>
    )
}
export default IfElseComponent`,I=`<script setup>
const props = defineProps({
    dataArray: Array
})
<\/script>
<template>
    <div>
        <span v-for="data in dataArray" :key="data?.id"> {{ data?.text }} </span>
    </div>
</template>`,T=` // One way (popular),
const ListRenderingComponent = ({ dataArray }) => {
    return (
        <div>
            {dataArray.map((data) => (
                <li key={data?.id} > {data?.text} </li>
            ))}
        </div>
    )
}

export default ListRenderingComponent

// Another way,
const ListRenderingComponent = ({ dataArray }) => {
    return (
        <div>
            {dataArray.forEach(data => {
                <h2>{data}</h2>
            })}
        </div>
    )
}
export default ListRenderingComponent`,V=`<script setup>
const text = ref('💚')
console.log(text.value)

<\/script>

<template>
    <h2>{{ text }}</h2>
</template>`,j=`import { useState } from "react"
const StateComponent = () => {
    const [text, setText] = useState('')
    console.log(text)

    return (
        <div>
            {text}
            <button onClick={() => setText('💙')}>Click Here</button>
        </div>
    )
}
export default StateComponent`,D=`<script setup>
const text = ref('')
<\/script>
<template>
    <h2>{{ text }}</h2>
    <input type="text" v-model="text">
</template>`,P=`import { useState } from "react"
const TwoWayDataBindingComponent = () => {
    const [txt, setTxt] = useState('')
    return (
        <div>
            <h2> {txt} </h2>
            <input type="text" value={txt} onChange={(e) => setTxt(e.target.value)} />
        </div>
    )
}
export default TwoWayDataBindingComponent`,M=`<script setup>
import { computed, ref } from 'vue'

const text = ref('Vue is life 💚')
const computedMsg = computed(()=> text.value.toUpperCase())
<\/script>

<template>
    <h2>{{ computedMsg }}</h2>
</template>`,W=`import { useMemo } from "react"
const ComputedPropertiesComponent = () => {
    const msg = "React is "
    // First way,
    const computedMsg = msg.split(" ").join("\\n")

    // If performance matter, (If, you can use VUE !)
    const computedMsg_ = useMemo(() => msg.split(" ").join("\\n"), [msg])
    return (
        <div>
            <h2> {computedMsg} </h2>
            <h2> {computedMsg_} </h2>
        </div>
    )
}
export default ComputedPropertiesComponent`,H=`<script setup>
const eventHandle = () => {
    alert('Event triggered !')
}
<\/script>

<template>
    <button v-on:click="eventHandle">Click Here !</button>
    <button @click.prevent="eventHandle">Click Here !</button>
</template>`,E=`const MethodsAndEventsComponent = () => {
    const eventHandle = (event, name) => {
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
            <button onClick={eventHandle(event, \`React\`)}>Click Here !</button>
        </div>
    )
}
export default MethodsAndEventsComponent`,A=`<script setup>
const count = ref(0)
watch(count, () => console.log(\`new count is: \${count.value}\`))

const countUp = () => {
    count.value++
}
<\/script>

<template>
    <button @click="countUp">Click Here {{ count }}</button>
</template>
`,J=`import { useEffect } from "react"
import { useState } from "react"
const WatchersComponent = () => {
    const [count, setCount] = useState(0)
    useEffect(() => {
        alert(count)
    }, [count])
    return (
        <div>
            <button onClick={() => setCount(Math.floor(Math.random() * 100))}>Click Here { count }</button>
        </div>
    )
}
export default WatchersComponent`,L=`<template>
    <div>
        This is a slot,
        <slot>
            Fallback value will display here if no data passed,
        </slot>
    </div>
</template>
`,F=`const SlotsComponent = ({ childElement }) => {
    return (
        <div>
            <h2>This library has no way of doing that !</h2>
            {childElement}
        </div>
    )
}
export default SlotsComponent`,N=`// Provider,
<script setup>
const count = ref(0)

provide('count', count)
<\/script>

// Reciver,
<script setup>
const count = inject('count')
<\/script>

<template>
    <div>{{ count }}</div>
</template>
`,B=`import { useContext } from "react"
import { createContext } from "react"
const ProvideAndInjectComponent = ({ childComponent }) => {
    const providingContext = createContext("React")
    return (
        <providingContext.Provider value="React">
            {childComponent}
        </providingContext.Provider>
    )
}
const childComp = () => {
    const injectedValue = useContext(providingContext)
    return <h2> {injectedValue} </h2>
}
export default ProvideAndInjectComponent`,U=`// Child,
<script setup>
const emit = defineEmits(['passData'])

emit('passData', 'hello !')
<\/script>

// Parent,
<script setup>
import Child from './Child.vue'

const childData = ref('No data passed yet,')
<\/script>

<template>
  <Child @passData="(txt) => childData = txt" />
  <p>{{ childData }}</p>
</template>`,O=`// Parent,
import React, { useState } from 'react'
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

// Child,
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
export default ParentComponent`,Z={__name:"VueOverReact",setup(q){return o({title:"React js for Vue js developers",contentType:"text/html; charset=utf-8",author:"Nalinda Dissanayake",articleAuthor:"Nalinda Dissanayake",articlePublishedTime:"2024-04-24T08:20:25.949Z",articleModifiedTime:"2024-05-03T06:50:11.949Z",articleTag:["vuejs","reactjs","frontend","vuejs for react developers","react for vuejs developers"]}),i({script:[{src:"/prism.js"}],link:[{rel:"stylesheet",href:"/prism.css"}]}),($,t)=>(l(),r("div",d,[t[68]||(t[68]=e("h2",{class:"blog-title"},"React JS for Vue JS Devs,",-1)),t[69]||(t[69]=e("div",{class:"py-4 lg:py-7 border-t border-b border-blue border-opacity-50 flex flex-col lg:flex-row"},[e("a",{class:"text-xs md:text-sm text-blue font-light",href:"https://prismjs.com/index.html#credits"},"Syntax highlighting with PrismJS"),e("span",{class:"lg:border-l lg:border-blue lg:border-opacity-50 lg:pl-4 lg:ml-4 text-xs md:text-sm text-blue font-light"},"Last updated: 2024.05.03")],-1)),e("div",{class:"b-s"},[t[0]||(t[0]=e("h4",{class:"b-t"},"# What is ?",-1)),t[1]||(t[1]=e("p",{class:"b-p"},[a(" React is a library. indicates that it has a narrow scope. simply a precompiled, well-defined set of functions to execute a specific operation. We call the library, and we can use it however we want. It is used dynamically. render the UI, which uses a virtual DOM. When the state of the virtual dom changes in accordance with the rendering of the real dom/UI,. Because React is a library, it is not tied to the web and has no relationship with browsers. To make it work in the browser environment, we need to use the reactdom package. This allows React to access the browser's DOM. Simply put, it can be used to build many dynamic user interfaces, including mobile apps, desktop apps, and so on. "),e("br"),e("br"),a(" VUE is a framework. This means it has almost everything it requires built into it. The framework controls our application or calls our code, and we must build our applications in such a way that the framework can understand them. Setting up and configuring Vue is simple because it is a framework. It works exceptionally well. Vue is also utilizing a virtual Dom. However, there are some experiments that attempt to eliminate the virtual dom in favor of the real/native dom. Vue is faster than React. Performance isn't particularly important in most cases, but it is a win. Vue also allows you to create other types of applications besides frontends, such as terminals. ")],-1)),t[2]||(t[2]=e("p",{class:"b-p"},[a(" When we write React, we are basically writing JavaScript functions that return HTML. We must write all CSS and HTML within JS code. So we can't use keywords like 'class' in React because they're reserved in JS. It isn't the only thing changing here. We can write React in JS or JSX files. JSX is basically JS that has been optimized to write HTML and CSS all along. Functions that accept multiple arguments. Because argument is treated as an object, we can use object destructuring to destructure it for easier use. "),e("br"),e("br"),a(" The basic idea is something like this: ")],-1)),e("pre",null,[e("code",{class:"language-javascript"},s(c))]),t[3]||(t[3]=e("p",{class:"b-p"},[a(" When we write Vue, we create single file components (sfc) in Vue files. We can also use an HTML approach. However, this is standard practice. In a component file, we can include a script tag, an html tag, and a CSS tag. Make more sense compared to reacting. Data and functions can be defined in the js tag, accessed in HTML, and styled in the css tag.Vue has a compiler. So Vue will compile our code in such a way that it can be rendered within the DOM. "),e("br"),e("br"),a(" The basic idea is something like this: ")],-1)),e("pre",null,[e("code",{class:"language-javascript"},s(p))])]),t[70]||(t[70]=n(`<div class="b-s"><h4 class="b-t"># Setup &amp; Structure</h4><p class="p-b font-light text-xs md:text-sm"> To spin up a new project use these commands. </p><pre><code class="language-bash">npm create vue@latest</code></pre><pre><code class="language-bash">npm create vite@latest
# then select react
        </code></pre><p class="b-p"> In both Vue and React projects, there is a src folder that contains two main files. Vue will use main.js and App.vue. The react files will be main.js and App.js. The main.js files contain code for app configuration and mounting in the DOM. Vue will mount on a div with the ID #app, while React will mount on a div with the ID #root. Pretty basic. The visible app is contained in the App.vue or App.js files. This can be divided into sections for the page view, footers, and navbars. Thus, only the page view component will change when the route changes. Vue has a built-in component called &lt;RouterView /&gt;, while React does not. Selecting the vue-router option when creating the project gives you access to the RouterLink component, which you can use to create navigations like &lt;RouterLink to=&quot;/&quot;&gt;Home&lt;/RouterLink&gt;. We can install the react-router-dom package and then use the &lt;Routes&gt;&lt;/Routes&gt; component. Inside this tag, we can define all the pages our app has with Route tags like &lt;Route path=&quot;/&quot; element={&lt;HomePage /&gt;} /&gt;. Using the RouterLink or Route tag is essential instead of using an anchor to control the single-page application behavior. Otherwise, the application will be fully reloaded again and again. Routing is a big topic, so I won&#39;t cover it here. </p></div>`,1)),e("div",{class:"b-s"},[t[6]||(t[6]=e("h4",{class:"b-t"},"01. Template components",-1)),t[7]||(t[7]=e("p",{class:"p-b font-light text-xs md:text-sm"},"This is the fundamental design of a reusable component that only returns HTML code. A few html tags can be defined in a vue template, but in a react template, every element needs to be nested inside of one main html tag. For that, we can utilize this "+s("<> </>")+" empty syntax, or an element like a div.",-1)),e("div",{class:"b-s-c"},[t[4]||(t[4]=e("span",{class:"code-tag"},"vue",-1)),e("pre",null,[e("code",{class:"language-markup"},s(u))]),t[5]||(t[5]=e("span",{class:"code-tag"},"react",-1)),e("pre",null,[e("code",{class:"language-jsx"},s(m))])])]),e("div",{class:"b-s"},[t[10]||(t[10]=e("h4",{class:"b-t"},"02. Props reciver components",-1)),t[11]||(t[11]=e("p",{class:"p-b font-light text-xs md:text-sm"},"The data that is sent to the components is called a prop. Vue reactivity is controlled by js proxy functions. Therefore, we must add the.value after the prop name if we wish to access the props value within the script tag. It functions normally in the template. If we'd like, we can use libraries like UseVue to alter this. React props are simply parameters passed to the function; as I said before, they are just a function. We can access these values within the function by using the argument name, which we defind or destructure for ease of use. I've mentioned this fairly above in What is it? section",-1)),e("div",{class:"b-s-c"},[t[8]||(t[8]=e("span",{class:"code-tag"},"vue",-1)),e("pre",null,[e("code",{class:"language-markup"},s(h))]),t[9]||(t[9]=e("span",{class:"code-tag"},"react",-1)),e("pre",null,[e("code",{class:"language-jsx"},s(v))])])]),e("div",{class:"b-s"},[t[14]||(t[14]=e("h4",{class:"b-t"},"03. Props passer components",-1)),t[15]||(t[15]=e("p",{class:"p-b font-light text-xs md:text-sm"},"We can pass data to child components like HTML attributes. In Vue, we put : before the attribute name.",-1)),e("div",{class:"b-s-c"},[t[12]||(t[12]=e("span",{class:"code-tag"},"vue",-1)),e("pre",null,[e("code",{class:"language-markup"},s(g))]),t[13]||(t[13]=e("span",{class:"code-tag"},"react",-1)),e("pre",null,[e("code",{class:"language-jsx"},s(b))])])]),e("div",{class:"b-s"},[t[18]||(t[18]=e("h4",{class:"b-t"},"04. Styled componentes",-1)),t[19]||(t[19]=e("p",{class:"p-b font-light text-xs md:text-sm"},"Simply add the styles as a regular HTML style attribute in Vue to pass them to the child. These styles are going to fall back to the child. In React, there is no separate way, and we have to do it the props way. ",-1)),e("div",{class:"b-s-c"},[t[16]||(t[16]=e("span",{class:"code-tag"},"vue",-1)),e("pre",null,[e("code",{class:"language-markup"},s(f))]),t[17]||(t[17]=e("span",{class:"code-tag"},"react",-1)),e("pre",null,[e("code",{class:"language-jsx"},s(w))])])]),e("div",{class:"b-s"},[t[22]||(t[22]=e("h4",{class:"b-t"},"05. Dynamic styled componentes",-1)),t[23]||(t[23]=e("p",{class:"p-b font-light text-xs md:text-sm"},"In Vue, if we add : before class and style attributes, we can add JS logic to them. Inreact we can't use keywords like class, as I previously mentioned, and following is a way. ",-1)),e("div",{class:"b-s-c"},[t[20]||(t[20]=e("span",{class:"code-tag"},"vue",-1)),e("pre",null,[e("code",{class:"language-markup"},s(y))]),t[21]||(t[21]=e("span",{class:"code-tag"},"react",-1)),e("pre",null,[e("code",{class:"language-jsx"},s(x))])])]),e("div",{class:"b-s"},[t[26]||(t[26]=e("h4",{class:"b-t"},"06. Dynamic rendering (if)",-1)),t[27]||(t[27]=e("p",{class:"p-b font-light text-xs md:text-sm"},"Vue has v-if and v-show directives. In React, it's just JS.",-1)),e("div",{class:"b-s-c"},[t[24]||(t[24]=e("span",{class:"code-tag"},"vue",-1)),e("pre",null,[e("code",{class:"language-markup"},s(k))]),t[25]||(t[25]=e("span",{class:"code-tag"},"react",-1)),e("pre",null,[e("code",{class:"language-jsx"},s(C))])])]),e("div",{class:"b-s"},[t[30]||(t[30]=e("h4",{class:"b-t"},"07. Dynamic rendering (if else)",-1)),t[31]||(t[31]=e("p",{class:"p-b font-light text-xs md:text-sm"},"Vue has v-if-else and v-else directives. In React, it's just JS.",-1)),e("div",{class:"b-s-c"},[t[28]||(t[28]=e("span",{class:"code-tag"},"vue",-1)),e("pre",null,[e("code",{class:"language-markup"},s(S))]),t[29]||(t[29]=e("span",{class:"code-tag"},"react",-1)),e("pre",null,[e("code",{class:"language-jsx"},s(R))])])]),e("div",{class:"b-s"},[t[34]||(t[34]=e("h4",{class:"b-t"},"08. List rendering",-1)),t[35]||(t[35]=e("p",{class:"p-b font-light text-xs md:text-sm"},"Vue has a v-for directive. In React, use JS loops or map, filter, or reduce like array methods. Don't forget to add a key attribute to keep the reactivity. key can be dynamically bound, as shown.",-1)),e("div",{class:"b-s-c"},[t[32]||(t[32]=e("span",{class:"code-tag"},"vue",-1)),e("pre",null,[e("code",{class:"language-markup"},s(I))]),t[33]||(t[33]=e("span",{class:"code-tag"},"react",-1)),e("pre",null,[e("code",{class:"language-jsx"},s(T))])])]),e("div",{class:"b-s"},[t[38]||(t[38]=e("h4",{class:"b-t"},"09. Define state",-1)),t[39]||(t[39]=e("p",{class:"p-b font-light text-xs md:text-sm"},"In Vue, there are two ways to define reactive variables. ref and reactive are those. In here, I use ref. Because Vue depends on JS proxies, when we access the value of these variables inside the script tag, have to use. value after the variable name. I said this above. In React, we need to use hooks. Hooks are provided by the react library. To define a reactive value, we have to destructure it to values from the useState. array. The first value is the reactive value, and the second is a function to change the reactive value. Commonly we name this function like set+ReactivVariableName. Default values can be defined as the parameters of the ref or useState functions, and which can be any type of object like a string, an array, etc.",-1)),e("div",{class:"b-s-c"},[t[36]||(t[36]=e("span",{class:"code-tag"},"vue",-1)),e("pre",null,[e("code",{class:"language-markup"},s(V))]),t[37]||(t[37]=e("span",{class:"code-tag"},"react",-1)),e("pre",null,[e("code",{class:"language-jsx"},s(j))])])]),e("div",{class:"b-s"},[t[42]||(t[42]=e("h4",{class:"b-t"},"10. Two way data binding",-1)),t[43]||(t[43]=e("p",{class:"p-b font-light text-xs md:text-sm"},"Vue has a straight-forward v-model directive that can bind the value of a state, while in React, we have to annoyingly bind state separately and add an event handler separately.",-1)),e("div",{class:"b-s-c"},[t[40]||(t[40]=e("span",{class:"code-tag"},"vue",-1)),e("pre",null,[e("code",{class:"language-markup"},s(D))]),t[41]||(t[41]=e("span",{class:"code-tag"},"react",-1)),e("pre",null,[e("code",{class:"language-jsx"},s(P))])])]),e("div",{class:"b-s"},[t[46]||(t[46]=e("h4",{class:"b-t"},"11. Computed properties",-1)),t[47]||(t[47]=e("p",{class:"p-b font-light text-xs md:text-sm"},"As above, Vue has computed properties for this. In React, we have figured out a way in JS. This can affect the performance, so there is a useMemo hook too. This is the total behavior of JS anyway. There are many stupid ways to get the same result. ",-1)),e("div",{class:"b-s-c"},[t[44]||(t[44]=e("span",{class:"code-tag"},"vue",-1)),e("pre",null,[e("code",{class:"language-markup"},s(M))]),t[45]||(t[45]=e("span",{class:"code-tag"},"react",-1)),e("pre",null,[e("code",{class:"language-jsx"},s(W))])])]),e("div",{class:"b-s"},[t[50]||(t[50]=e("h4",{class:"b-t"},"12. Methods & events",-1)),t[51]||(t[51]=e("p",{class:"p-b font-light text-xs md:text-sm"},"In Vue, we have v-on directives. We can simply write @ instead of this, which is easy. We can chain prevent methods to stop the default behavior, and there are other chainable methods too. Check the documents. In React, we can write events like HTML attributes with slightly different syntax. Just press ctrl + space in your VScode in any case to get suggestions, so it's easy to deal with.",-1)),e("div",{class:"b-s-c"},[t[48]||(t[48]=e("span",{class:"code-tag"},"vue",-1)),e("pre",null,[e("code",{class:"language-markup"},s(H))]),t[49]||(t[49]=e("span",{class:"code-tag"},"react",-1)),e("pre",null,[e("code",{class:"language-jsx"},s(E))])])]),e("div",{class:"b-s"},[t[54]||(t[54]=e("h4",{class:"b-t"},"13. Watchers",-1)),t[55]||(t[55]=e("p",{class:"p-b font-light text-xs md:text-sm"},"Watchers are in a reactive state and run when the value changes. Vue has built-in watchers and In React, we have to use another hook called useEffect. Which is commonly known as the useFootGun hook. I really do not want to explain this hook here.",-1)),e("div",{class:"b-s-c"},[t[52]||(t[52]=e("span",{class:"code-tag"},"vue",-1)),e("pre",null,[e("code",{class:"language-markup"},s(A))]),t[53]||(t[53]=e("span",{class:"code-tag"},"react",-1)),e("pre",null,[e("code",{class:"language-jsx"},s(J))])])]),e("div",{class:"b-s"},[t[58]||(t[58]=e("h4",{class:"b-t"},"14. Slots",-1)),t[59]||(t[59]=e("p",{class:"p-b font-light text-xs md:text-sm"},"Slots are powerful components. We can pass a complete element into another element in this way and also define a fallback value if an element doesn't get passed. Vue has a slot component for this, and in React, we have nothing again. We can pass an element as a prop if we want. ",-1)),e("div",{class:"b-s-c"},[t[56]||(t[56]=e("span",{class:"code-tag"},"vue",-1)),e("pre",null,[e("code",{class:"language-markup"},s(L))]),t[57]||(t[57]=e("span",{class:"code-tag"},"react",-1)),e("pre",null,[e("code",{class:"language-jsx"},s(F))])])]),e("div",{class:"b-s"},[t[62]||(t[62]=e("h4",{class:"b-t"},"15. Provide & inject",-1)),t[63]||(t[63]=e("p",{class:"p-b font-light text-xs md:text-sm"},"If we want to pass the reactive state of a component into a deeply nested component easily, we use provide and inject. Vue has a straight-forward way to do this, but in React, we have to use another hook called useContext. Which is a powerful one.",-1)),e("div",{class:"b-s-c"},[t[60]||(t[60]=e("span",{class:"code-tag"},"vue",-1)),e("pre",null,[e("code",{class:"language-markup"},s(N))]),t[61]||(t[61]=e("span",{class:"code-tag"},"react",-1)),e("pre",null,[e("code",{class:"language-jsx"},s(B))])])]),e("div",{class:"b-s"},[t[66]||(t[66]=e("h4",{class:"b-t"},"16. Pass date from child to parent",-1)),t[67]||(t[67]=e("p",{class:"p-b font-light text-xs md:text-sm"},"Passing data from a child to a parent is a primary need. Bue use emits for this. we can emit from the child and receive that emit as an event on a parent easily. In React, there is no easy method for this, but We can use a callback function as below. There is another way to achieve this behavior using the useContext hook. And badly, in other ways too. ",-1)),e("div",{class:"b-s-c"},[t[64]||(t[64]=e("span",{class:"code-tag"},"vue",-1)),e("pre",null,[e("code",{class:"language-markup"},s(U))]),t[65]||(t[65]=e("span",{class:"code-tag"},"react",-1)),e("pre",null,[e("code",{class:"language-jsx"},s(O))])])]),t[71]||(t[71]=n('<div class="b-s"><h4 class="b-t"># Life Cycle Hooks</h4><p class="b-p">Vue has built-in methods like onMounted, onBeforeMount, etc. to manage the life cycle. In React, we have to rely on hooks like useEffect, which is super bad. Older days when React used class-based components also had onMounted like hooks, which are not present in modern React. This is also quite a topic for another article.</p></div><div class="b-s"><h4 class="b-t"># State Management</h4><p class="b-p">Vue has a lovely library called Pinia 🍍 for global state management. We can select this option in the terminal when we create the project. Even without this, we can use the built-in reactive methods to build a nice global store. In React, there is a library called Redux, which is dynamically changing over time. It&#39;s nowhere close to DX, which Pinia offers. This will be covered in a separate article. </p></div><div class="b-s"><h4 class="b-t"># Meta Frameworks</h4><p class="b-p">Metaframeworks are frameworks built on top of another framework. Vue has Nuxt, which has the best DX I experienced across all the frameworks, and React has Next and Remix, like frameworks. These frameworks are trying to solve the problems of base frameworks, and they actually do that. NuxtJs can be used to basically build anything from SPA, full-stack app to a rest API if you want. NextJs built by Vercel, and I have seen developers complaining that deploying NextJs projects outside of Vercel is hard. </p></div><div class="b-s"><h4 class="b-t"># Usage And What To Love ?</h4><p class="b-p">When it comes to DX, Vue has a lot more to offer than React. When it comes to usage React has the upper hand, at least in western countries. Both are battle-tested, mature frameworks. Vue is backed by Evan You, the great creator of the framework, and other open-source developers. React is backed by Meta/Facebook. What a developer will like depends on their preferences and how big a slave they are. Most of the time, no matter what you like, you will have to go against your preferences in this life! And it&#39;s a fact. </p></div><p class="mt-12 text-blue text-xs md:text-sm font-light text-center translate-y-1/2 relative after:block drop-shadow-border_black">END</p><hr class="border-blue border-opacity-50">',6))]))}};export{Z as default};
