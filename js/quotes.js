const quotes = [
    {
        quote: "실행이 곧 전부다. 아이디어는 과제 극복의 5%에 불과하다. 아이디어의 좋고 나쁨은 어떻게 실행하느냐에 따라 결정된다고 해도 과언이 아니다.",
        author: "카를로스 곤 닛산 자동차 사장",
    },
    {
        quote: "아이디어를 내는 데 1의 노력이 든다면, 그것을 계획하는 데에는 10의 힘이, 그것을 실현하는 데에는 100의 에너지가 든다. ",
        author: "이치무라 기요시, RICOH 창업회장",
    },
    {
        quote: "아는 것이 힘이던 시대는 지났다. 생각이든 결심이든 실천이 없으면 아무 소용이 없다. 아무것도 달라지지 않는다. ‘하는 것’이 힘이다. 1퍼센트를 이해하더라도 그것을 실천하는 자가 행복한 사람이다. ",
        author: "우종민 박사",
    },
    {
        quote: "아이디어는 세상을 바꾸는 소중한 자산이고, 적절한 준비는 매우 중요하며, 지식과 지혜는 위대한 성취를 추구할 때 근본이 되는 중요한 요소다. 그러나 아이디어도, 준비도, 지식이나 지혜도 행동 없이는 무용지물이다.",
        author: "로버트 링거",
    },
    {
        quote: "나는 꿈이 없고 비전이 없는 남자는 쓸모없다고 생각해왔지만, 만일 자신의 꿈과 비전을 조금이라도 실현하기 위해 자기 행동을 바꾸는 실제적인 노력이 없다면 그 역시 쓸모없는 인물이다.",
        author: "시어도어 루스벨트 전 미국 대통령",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];
console.dir(quote);
// quote.innerHTML=`<p>${todaysQuote.quote}<br><strong>${todaysQuote.author}</strong></p>`;
// quote.innerText = todaysQuote.quote;
// author.innerText = todaysQuote.author;

const test = document.querySelector("#quote");
console.dir(test);