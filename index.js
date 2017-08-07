let katzDeliLine = []

function takeANumber(katzDeliLine, name) {
	katzDeliLine.push(name)
	return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {

	if (katzDeliLine.length < 1) {
		return "There is nobody waiting to be served!"
	} else {
		return "Currently serving " + katzDeliLine.shift() + "."
	}
}

function currentLine(katzDeliLine) {
	
	let names = ""

	if (katzDeliLine.length < 1) {
		return "The line is currently empty."
	} else {
		for (let i = 0; i < katzDeliLine.length; i++) {
			names += ` ${i + 1}. ${katzDeliLine[i]},` 
		}
		return "The line is currently:" + names.slice(0, -1)
	}
}