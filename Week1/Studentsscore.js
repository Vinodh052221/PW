/**
 * Evaluate a student's numeric score and return a letter grade.
 * Uses a switch statement on true to evaluate ranges.
 * @param {number} score - numeric score (0-100)
 * @returns {string} letter grade (A, B, C, D, F) or an error message for invalid input
 */
/**function evaluateGrade(score) {
	if (typeof score !== 'number' || !isFinite(score)) return 'Invalid score';
	if (score < 0 || score > 100) return 'Invalid score';

	switch (true) {
		case (score >= 90):
			return 'A';
		case (score >= 80):
			return 'B';
		case (score >= 70):
			return 'C';
		case (score >= 60):
			return 'D';
		default:
			return 'F';
	}
}

// Export for CommonJS and attach to global for browser use
if (typeof module !== 'undefined' && module.exports) module.exports = evaluateGrade;
if (typeof window !== 'undefined') window.evaluateGrade = evaluateGrade;

// Example usage (uncomment to test):
console.log(evaluateGrade(87)); // B
console.log(evaluateGrade(95)); // A */   

function getGrade(score) {

    switch (true) {

        case (score >= 90 && score <= 100):
            return "Grade A";

        case (score >= 80 && score < 90):
            return "Grade B";

        case (score >= 70 && score < 80):
            return "Grade C";

        case (score >= 60 && score < 70):
            return "Grade D";

        case (score >= 0 && score < 60):
            return "Grade F";

        default:
            return "Invalid score";
    }
}

console.log("score: 95" + " " + getGrade(95)); // Grade A
console.log("score: 82" + " " + getGrade(82)); // Grade B
console.log("score: 74" + " " + getGrade(74)); // Grade C
console.log("score: 65" + " " + getGrade(65)); // Grade D
console.log("score: 45" + " " + getGrade(45)); // Grade F