function findDivThreeFive(numberChoose){
	const arrayNumber = Array.from({length:numberChoose-1},(v,k)=>k+1);
	const result = arrayNumber.filter(i => i % 5 == 0 || i % 3 == 0)
	if(result.length === 0){ return [0]; }
	return result;
}

function calcSumDivThreeFive(){
	const numberChoose = Math.abs( document.getElementById("numberChoose").value );
	const arrayNumber = findDivThreeFive(numberChoose);
	const totalSum = arrayNumber.reduce((acc, object) => {
		return acc + object;
	})
	document.getElementById("result").innerHTML = "O resultado do somatório é " + totalSum;
}

function calcSumDivThreeFiveN(){
	const numberChoose = Math.abs( document.getElementById("numberChooseN").value );
	const vectorStringResult = [];
	for(let i = 1; i <= numberChoose; i++){
		const arrayNumber = findDivThreeFive(i);
		const totalSum = arrayNumber.reduce((acc, object) => {
			return acc + object;
		})
		vectorStringResult.push("O resultado do somatório de " + i + " é " + totalSum + "<br></br>")

	}
	document.getElementById("resultN").innerHTML = vectorStringResult;
}