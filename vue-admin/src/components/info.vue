<template>
	<div class="info">
		<mavon-editor style="height: 100%" v-model="content"></mavon-editor>
		<div class="content">{{ content }}</div>
	</div>
</template>
<script>
    // Local Registration
    import { mavonEditor } from 'mavon-editor'
    import 'mavon-editor/dist/css/index.css'
    export default {
    	name: 'editor',
    	components: {
    		mavonEditor
            // or 'mavon-editor': mavonEditor
        },
        data(){
        	return{
        		content:''
        	}
        }
    }
    </script>
    <style>
    #editor {
    	margin: auto;
    	width: 80%;
    	height: 580px;
    }
    </style>