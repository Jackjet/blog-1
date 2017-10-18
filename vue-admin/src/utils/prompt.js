import { Message } from 'element-ui';

export default{
	no(message){		
		Message.error(message)
	},

	ok(message){
		Message.success(message)
	}
}
