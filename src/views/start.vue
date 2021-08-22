<template>
  <div class="title">
    <p>Normal : 4자리</p>
    <p class="yellow"> 스트라이크 <br> {{strike}}</p>
    <p class="green"> 볼 <br> {{ball}}</p>
    <p class="red"> 아웃 <br> {{out}}</p>
    <p class="black">{{this.tries.length}}<br> 회말</p>
    <form @submit.prevent="game">
        <input minlength="4" maxlength="4" v-model="value"/><br>
        <button>제출</button>
    </form>
  </div>
  <div>
      <p>풀이를 돕기위한 투구기록!</p>
    <ul class="record">
        <li v-for="t in tries" v-bind:key="t">
            <div>{{t.try}}</div>
            <div>{{t.result}}</div>
        </li>
    </ul>
  </div>
  <footer>
      <p>제작자 : 김홍길</p>
  </footer>
</template>

<script>
const makeNumbers = () => {
    const integer = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const array = [];
    for (let i = 0; i < 4; i += 1){
        const choice = integer.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
        array.push(choice);
    }
    return array;
}
export default {
    data(){
        return{
        answer: makeNumbers(),
        tries:[],
        value:'',
        result: '',
        strike : '',
        ball : '',
        out: '',
        }
    },
    methods: {
        game(){
            //console.log(`test ${this.answer.join('')}`);
            if(this.value === this.answer.join('')){
                this.tries.push({
                    try: this.value,
                    result: '성공!',
                });
                this.result = '성공!',
                alert('성공했습니다! 재시작합니다!');
                this.value = '';
                this.tries = [];
                this.answer = makeNumbers(); 
            }else{
                if(this.tries.length >= 9){
                    this.result = `9회말 게임 셋! 답은 ${this.answer.join(',')}입니다. 아쉽습니다~`
                    alert('실패했습니다! 재시작합니다');
                    this.value = '';
                    this.answer = makeNumbers(); 
                    this.tries = [];
                }
                this.strike = 0;
                this.ball = 0;
                this.out=0;
                const answerArray = this.value.split('').map(v => parseInt(v));
                for (let i = 0; i < 4; i += 1){
                    if(answerArray[i] === this.answer[i]){
                        this.strike++;
                    }else if(this.answer.includes(answerArray[i])) {
                        this.ball++;
                    }
                    else {
                        this.out++;
                    }
                }
                this.tries.push({
                    try: this.value,
                    result: `${this.strike} strike ${this.ball} ball`
                });
            }
            this.value = '';
        }
    },
};
</script>

<style scoped>
.title {
  font-weight: bold;
  font-size: 40px;
  margin : 30px;
}
.yellow {
    width: 33%;
    display: inline-block;
    color : yellow;
    background-color : black;

}
.green {
    width: 33%;
    display: inline-block;
    color : green;
    background-color : black;
}
.red {
    width: 33%;
    display: inline-block;
    color : red;
    background-color : black;
}
.black {
    color : white;
    background-color: black;
}
input {
    width : 300px;
    height : 100px;
    font-size : 70px;
}
button {
    width : 100px;
    height : 30px;
    font-size : 20px;
}
.size {
    font-size  : 40px;
}
.record {
    margin-left: 40%;
    margin-right: 40%;
    text-align: left;
}
</style>
