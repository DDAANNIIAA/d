function increaseScore(team) {
    const box = document.getElementById(team);
    const scoreElement = box.querySelector('.score');
    let score = parseInt(scoreElement.innerText);
    score += 1;
    scoreElement.innerText = score;

    // تحريك الحبل بناءً على النقاط
    const rope = box.querySelector('::before'); // الحبل
    box.style.transform = `translateY(-${score * 20}px)`; // تحريك الصندوق للأعلى
    rope.style.height = `${score * 20}px`; // زيادة طول الحبل
}

function decreaseScore(team) {
    const box = document.getElementById(team);
    const scoreElement = box.querySelector('.score');
    let score = parseInt(scoreElement.innerText);
    if (score > 0) {
        score -= 1;
        scoreElement.innerText = score;

        // تحريك الحبل بناءً على النقاط
        const rope = box.querySelector('::before'); // الحبل
        box.style.transform = `translateY(-${score * 20}px)`; // تحريك الصندوق للأسفل
        rope.style.height = `${score * 20}px`; // تقليص طول الحبل
    }
}
