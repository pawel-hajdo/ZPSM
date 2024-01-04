export const getTestsFromApi = async () => {
    try{
        const response = await fetch('https://tgryl.pl/quiz/tests');
        return await response.json();
    }catch (error){
        console.log(error);
    }
}

export const getTestDetailsFromApi = async (testId) => {
    try{
        const response = await fetch(`https://tgryl.pl/quiz/test/${testId}`);
        return  await response.json();
    }catch (error){
        console.log(error);
    }
}

export const sendResultsToApi = async (points, total, type) =>{
    fetch('https://tgryl.pl/quiz/result', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "nick": 'test123',
            "score": points,
            "total": total,
            "type": type,
        }),
    }).then(r => console.log(r.status));
}

export const getResultsFromApi = async () => {
    try{
        const response = await fetch('https://tgryl.pl/quiz/results?last=20');
        return await response.json();
    }catch (error){
        console.log(error);
    }
}
