/*
    Estara en mayuscula la primera letra de la oracion y
    aquellas palabras que tengan mas de 3 letras
*/
const capitalize = (val: string) => {
	return (
		val[0].toUpperCase() +
		val
			.split(" ")
			.map((e) => {
				if (e.length > 3) return e[0].toUpperCase() + e.slice(1);
				return e;
			})
			.join(" ")
			.slice(1)
	);
};

export default capitalize;
