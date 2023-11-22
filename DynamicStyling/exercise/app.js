const app = Vue.createApp({
	data() {
		return {
			inputClass: '',
			inputColor: '',
			pVisible: true,
		};
	},
	methods: {
		toggleClass() {
			this.pVisible = !this.pVisible;
		},
	},
	computed: {
		setClass() {
			return this.inputClass;
		},

		setToggleClass() {
			return this.pVisible ? 'visible' : 'hidden';
		},
	},
	watch: {},
});

app.mount('#assignment');
