const app = Vue.createApp({
	data() {
		return {
			counter: 0,
		};
	},
	watch: {
		counter(value) {
			const that = this;
			if (value > 37) {
				setTimeout(() => {
					that.counter = 0;
				}, 5000);
			}
		},
	},
	computed: {
		output() {
			return this.counter < 37
				? 'Not there yet'
				: this.counter === 37
				? this.counter
				: 'too much';
		},
	},
	methods: {
		add(num) {
			this.counter += num;
		},
	},
});

app.mount('#assignment');

// Vue-Komponente
const example = new Vue({
	data: {
		// Daten, die überwacht werden können
		myData: 'Beispiel',
		firstName: 'John',
		lastName: 'Doe',
	},
	watch: {
		// Überwachen von Änderungen an myData
		myData: function (newValue, oldValue) {
			// Aktionen basierend auf der Änderung von myData ausführen
		},
	},
	computed: {
		// Berechnete Eigenschaft für den vollen Namen
		fullName: function () {
			return this.firstName + ' ' + this.lastName;
		},
	},
	methods: {
		// Benutzerdefinierte Methode zum Begrüßen
		greet: function () {
			alert('Hello!');
		},
	},
});

// Watch:
// Verwendung: watch wird verwendet, um Änderungen an einer bestimmten Datenquelle zu überwachen, z. B. eine Datenproperty.
// Warum: Du könntest watch verwenden, wenn du auf Änderungen einer Datenproperty reagieren möchtest und dann benutzerdefinierte Aktionen ausführen möchtest, basierend auf diesen Änderungen.

// Computed:
// Verwendung: computed wird verwendet, um abgeleitete Daten zu erstellen, die auf anderen Datenquellen basieren. Diese abgeleiteten Daten werden automatisch aktualisiert, wenn die zugrunde liegenden Daten sich ändern.
// Warum: Du könntest computed verwenden, wenn du einen Wert benötigst, der sich dynamisch aus anderen Daten berechnet, und du sicherstellen möchtest, dass diese Berechnung automatisch aktualisiert wird, wenn sich die Eingangsdaten ändern.

// Methoden:
// Verwendung: Methoden werden definiert, um benutzerdefinierte Funktionen auszuführen, die von Ereignissen, Direktiven oder anderen Aktionen ausgelöst werden können.
// Warum: Du könntest Methoden verwenden, wenn du Code ausführen möchtest, der nicht automatisch mit Datenveränderungen verbunden ist oder wenn du Code haben möchtest, der explizit durch Benutzeraktionen ausgelöst wird.
