import{u as o,a as n}from"./Nl_OQPAh.js";import{c,a as t,t as e,g as s,d as a,o as r}from"./DZrCDmg3.js";const i={class:"blog-page"},l=s('<h2 class="blog-title">React JS for Vue Devs,</h2><hr class="py-7 border-blue border-opacity-50"><a class="text-xs text-blue font-light" href="https://prismjs.com/index.html#credits">Syntax highlighting with PrismJS</a><h2 class="text-3xl lg:text-5xl uppercase text-yellow-400 font-medium py-12">not completed</h2><h4 class="b-t">What is ?</h4><p class="b-p"> When we write react we write functions which simply returns html. in react we basically write js. we need to write all the css and html in js. so we cant use keywords like `class` in react. because they are reserved js keywords. we can write react in js files or jsx files. jsx is just js files optimized to write html together. functions which accept many arguments. argument accept as a object so we can ues object destructuring for destructure them before use. <br><br> basic idea is something like this, </p>',6),p=t("p",{class:"b-p"},[a(" When we write vue we use sfc (single file comopnents) which ends with .vue extension. we can use html approche too. but ... this is the standard way. in a component file we can write a script tag, html tag and a css tag. make much sense compared to react we can define data in js tag, access them in html and use styles in css tag. vue has a compiler. so vue is going to compile our components in a way to render it better in dom. "),t("br"),t("br"),a(" basic idea is something like this, ")],-1),d=s('<h4 class="b-t">Setup</h4><p class="italic font-light text-sm">yet to write ...</p><h4 class="b-t">Structure</h4><p class="italic font-light text-sm">yet to write ...</p><h4 class="b-t">Difference</h4><p class="italic font-light text-sm">yet to write ...</p><hr class="py-12"><h4 class="b-t">01. template components</h4><span class="code-tag">vue</span>',9),u=t("span",{class:"code-tag"},"react",-1),h=t("h4",{class:"b-t"},"02. props reciver components",-1),m=t("span",{class:"code-tag"},"vue",-1),g=t("span",{class:"code-tag"},"react",-1),v=t("h4",{class:"b-t"},"03. props passer components",-1),_=t("span",{class:"code-tag"},"vue",-1),f=t("span",{class:"code-tag"},"react",-1),C=t("h4",{class:"b-t"},"04. styled componentes",-1),x=t("span",{class:"code-tag"},"vue",-1),y=t("span",{class:"code-tag"},"react",-1),b=t("h4",{class:"b-t"},"04. dynamic styled componentes",-1),w=t("span",{class:"code-tag"},"vue",-1),j=t("span",{class:"code-tag"},"react",-1),k=t("h4",{class:"b-t"},"05. dynamic rendering (if)",-1),S=t("span",{class:"code-tag"},"vue",-1),D=t("span",{class:"code-tag"},"react",-1),P=t("h4",{class:"b-t"},"06. dynamic rendering (if else)",-1),R=t("span",{class:"code-tag"},"vue",-1),T=t("span",{class:"code-tag"},"react",-1),A=t("h4",{class:"b-t"},"07. list rendering",-1),E=t("span",{class:"code-tag"},"vue",-1),M=t("span",{class:"code-tag"},"react",-1),V=t("h4",{class:"b-t"},"08. define state",-1),F=t("span",{class:"code-tag"},"vue",-1),H=t("span",{class:"code-tag"},"react",-1),I=t("h4",{class:"b-t"},"09. two way data binding",-1),B=t("span",{class:"code-tag"},"vue",-1),N=t("span",{class:"code-tag"},"react",-1),W=t("h4",{class:"b-t"},"10. computed properties",-1),L=t("span",{class:"code-tag"},"vue",-1),U=t("span",{class:"code-tag"},"react",-1),$=t("h4",{class:"b-t"},"11. methods & events",-1),O=t("span",{class:"code-tag"},"vue",-1),Y=t("span",{class:"code-tag"},"react",-1),z=t("h4",{class:"b-t"},"12. watchers",-1),J=t("span",{class:"code-tag"},"vue",-1),G=t("span",{class:"code-tag"},"react",-1),q=t("h4",{class:"b-t"},"13. slots",-1),K=t("span",{class:"code-tag"},"vue",-1),Q=t("span",{class:"code-tag"},"react",-1),X=t("h4",{class:"b-t"},"14. provide & inject",-1),Z=t("span",{class:"code-tag"},"vue",-1),tt=t("span",{class:"code-tag"},"react",-1),et=t("h4",{class:"b-t"},"15. pass date from child to parent",-1),st=t("span",{class:"code-tag"},"vue",-1),at=t("span",{class:"code-tag"},"react",-1),ot=s('<h4 class="b-t">Life Cycle Hooks</h4><p class="italic font-light text-sm">yet to write ...</p><h4 class="b-t">Router</h4><p class="italic font-light text-sm">yet to write ...</p><h4 class="b-t">State Management</h4><p class="italic font-light text-sm">yet to write ...</p><h4 class="b-t">Meta Frameworks</h4><p class="italic font-light text-sm">yet to write ...</p><h4 class="b-t">Usage And What To Love</h4><p class="italic font-light text-sm">yet to write ...</p>',10),nt=`function btn(data){
    return (
        \`<button> \${data.text}</button>\`
    )
}

// using destructuring
function btn({data}){
    return (
        \`<button> \${text}</button>\`
    )
}`,ct=`<script setup>
let data ='Vue is lovely'
<\/script>

<template>
    <h1>{{data}}</h1>
</template>

<styles scooped>
<styles>`,rt=`<template>
    <h2>Components</h2>
</template>`,it=`const TemplateComponent = () => {
    return (
        <div>
            <h2>Templates !</h2>
        </div>
    )
}
export default TemplateComponent`,lt=`<script setup>
const props = defineProps({
 text: String
})
<\/script>
<template>
    <h2>text is {{ text }}</h2> 
</template>
`,pt=`const PropsReceiverComponent = ({ name }) => {
    return (
        <div>
            <h2>{name}</h2>
        </div>
    )
}
export default PropsReceiverComponent`,dt=`<template>
    <PropsReciverComponent :text="'Vue is Lovely'"/> 
</template>`,ut=`const PropsPasserComponent = () => {
    return (
        <div>
            <PropsReceiverComponent name={"Vue Js"}/>
        </div>
    )
}
export default PropsPasserComponent`,ht=`<template>
    <PropsReciverComponent style="height: 100dvh;" class="bg-cyan-700"/> 
</template>`,mt=`const StyleComponent = ({ styles, cssClasses }) => {
    return (
          <div style={styles} className={cssClasses}>
                <h2>Styles</h2>
          </div>
    )
}
export default StyleComponent`,gt=`<template>
    <h2 :class="true ? 'bg-green' : 'bg-red'"></h2>
    <h2 :style="\`background: \${true ? 'green' : 'red'};\`"></h2>
</template>
`,vt=`const DynamicStyleComponent = () => {
    return (
        <>
            <h2 style={{ background: true ? 'green' : 'red', }} ></h2>
            <h2 className={\`\${true ? "bg-green" : "bg-red"}\`}></h2>
        </>
    )
}

export default DynamicStyleComponent`,_t=`<script setup>
const props = defineProps({
      show: Boolean
})
<\/script>
<template>
    <div>
          Below span,
          <span v-if="show"> If true Will be shown </span>
    </div>
</template>`,ft=`const IfComponent = ({ isReactACurse }) => {
    // First way,
    if (isReactACurse) return <h2>Yes it is !</h2> 

    // Second way,
    return (     
          <div>
                {isReactACurse && <h2>Yes it is !</h2>}
          </div>
    )
}
export default IfComponent`,Ct=`<script setup>
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
</template>`,xt=`const IfElseComponent = ({ isReactACurse }) => {
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
export default IfElseComponent`,yt=`<script setup>
const props = defineProps({
    dataArray: Array
})
<\/script>
<template>
    <div>
        <span v-for="d in dataArray" :key="d.id"> {{ d.text }} </span>
    </div>
</template>`,bt=` // One way (popular),
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
export default ListRenderingComponent`,wt=`<script setup>
import { ref } from 'vue'

const text = ref('EDGE of Horizon')
console.log(text.value)

<\/script>

<template>
    <h2>{{ text }}</h2>
</template>`,jt=`import { useState } from "react"
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
export default StateComponent`,kt=`<script setup>
const text = ref('')
<\/script>
<template>
    <h2>{{ text }}</h2>
    <input type="text" v-model="text">
</template>`,St=`import { useState } from "react"
const TwoWayDataBindingComponent = () => {
    const [txt, setTxt] = useState('')
    return (
        <div>
            <h2> {txt} </h2>
            <input type="text" value={txt} onChange={(e) => setTxt(e.target.value)} />
        </div>
    )
}
export default TwoWayDataBindingComponent`,Dt=`<script setup>
import { computed, ref } from 'vue'

const text = ref('EDGE of Horizon')
const niceText = computed(()=> text.value.toUpperCase())
<\/script>

<template>
    <h2>{{ niceText }}</h2>
</template>`,Pt=`import { useMemo } from "react"
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
export default ComputedPropertiesComponent`,Rt=`<script setup>
const something = () => {
    alert('Clicked')
}
<\/script>

<template>
    <button v-on:click="something">Click Here !</button>
    <button @click.prevent="something">Click Here !</button>
</template>`,Tt=`const MethodsAndEventsComponent = () => {
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
export default MethodsAndEventsComponent`,At=`<script setup>
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
`,Et=`import { useEffect } from "react"
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
export default WatchersComponent`,Mt=`<template>
    <div>
        This is a slot,
        <slot>
            Fallback value will display here if no data passed,
        </slot>
    </div>
</template>
`,Vt=`const SlotsComponent = ({ childElement }) => {
    return (
        <div>
            <h2>This library has no way of doing that !</h2>
            <h3>Be happy with this bro !</h3>
            <hr />
            {childElement}
        </div>
    )
}
export default SlotsComponent`,Ft=`// Provider,
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
`,Ht=`import { useContext } from "react"
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
export default ProvideAndInjectComponent`,It=`// Child,
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
</template>`,Bt=`import React, { useState } from 'react'
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
export default ParentComponent`,Ot={__name:"VueOverReact",setup(Nt){return o({title:"React js for Vue js developers",contentType:"text/html; charset=utf-8",author:"Nalinda Dissanayake",articleAuthor:"Nalinda Dissanayake",articlePublishedTime:"2024.04.24",articleTag:["vuejs","reactjs","frontend","vuejs for react developers","react for vuejs developers"]}),n({script:[{src:"/prism.js"}],link:[{rel:"stylesheet",href:"/prism.css"}]}),(Wt,Lt)=>(r(),c("div",i,[l,t("pre",null,[t("code",{class:"language-javascript"},e(nt))]),p,t("pre",null,[t("code",{class:"language-javascript"},e(ct))]),d,t("pre",null,[t("code",{class:"language-javascript"},e(rt))]),u,t("pre",null,[t("code",{class:"language-jsx"},e(it))]),h,m,t("pre",null,[t("code",{class:"language-javascript"},e(lt))]),g,t("pre",null,[t("code",{class:"language-jsx"},e(pt))]),v,_,t("pre",null,[t("code",{class:"language-javascript"},e(dt))]),f,t("pre",null,[t("code",{class:"language-jsx"},e(ut))]),C,x,t("pre",null,[t("code",{class:"language-javascript"},e(ht))]),y,t("pre",null,[t("code",{class:"language-jsx"},e(mt))]),b,w,t("pre",null,[t("code",{class:"language-javascript"},e(gt))]),j,t("pre",null,[t("code",{class:"language-jsx"},e(vt))]),k,S,t("pre",null,[t("code",{class:"language-javascript"},e(_t))]),D,t("pre",null,[t("code",{class:"language-jsx"},e(ft))]),P,R,t("pre",null,[t("code",{class:"language-javascript"},e(Ct))]),T,t("pre",null,[t("code",{class:"language-jsx"},e(xt))]),A,E,t("pre",null,[t("code",{class:"language-javascript"},e(yt))]),M,t("pre",null,[t("code",{class:"language-jsx"},e(bt))]),V,F,t("pre",null,[t("code",{class:"language-javascript"},e(wt))]),H,t("pre",null,[t("code",{class:"language-jsx"},e(jt))]),I,B,t("pre",null,[t("code",{class:"language-javascript"},e(kt))]),N,t("pre",null,[t("code",{class:"language-jsx"},e(St))]),W,L,t("pre",null,[t("code",{class:"language-javascript"},e(Dt))]),U,t("pre",null,[t("code",{class:"language-jsx"},e(Pt))]),$,O,t("pre",null,[t("code",{class:"language-javascript"},e(Rt))]),Y,t("pre",null,[t("code",{class:"language-jsx"},e(Tt))]),z,J,t("pre",null,[t("code",{class:"language-javascript"},e(At))]),G,t("pre",null,[t("code",{class:"language-jsx"},e(Et))]),q,K,t("pre",null,[t("code",{class:"language-javascript"},e(Mt))]),Q,t("pre",null,[t("code",{class:"language-jsx"},e(Vt))]),X,Z,t("pre",null,[t("code",{class:"language-javascript"},e(Ft))]),tt,t("pre",null,[t("code",{class:"language-jsx"},e(Ht))]),et,st,t("pre",null,[t("code",{class:"language-javascript"},e(It))]),at,t("pre",null,[t("code",{class:"language-jsx"},e(Bt))]),ot]))}};export{Ot as default};
