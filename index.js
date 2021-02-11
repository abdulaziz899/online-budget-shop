// const calculationPhone=()=>{
//     allCalculation();
// }
const allCalculation=()=>{
    const phoneName=document.getElementById('phoneName').innerText;
    const names=document.getElementById('names');
    names.value=phoneName;
    const pricePhone=document.getElementById('pricePhone').innerText;
    const price=parseFloat(pricePhone);
    const priceCount=document.getElementById('priceCount');
    priceCount.value= `${price}`;
    document.getElementById('nameShow').value=phoneName;
    const headerSection=document.getElementById('headerSection');
    headerSection.style.display='none';
    const mainSection=document.getElementById('mainSection');
    mainSection.style.display='none';
    const checkOut=document.getElementById('checkOut');
    checkOut.style.display='block';
}
const numberIncrease=document.getElementById('numberIncrease');
numberIncrease.addEventListener('click',function(){
    let numberCount=document.getElementById('numberCount').value;
    numberCount++;
    document.getElementById('numberCount').value=numberCount;
    numberCountCalculation(numberCount);
})
const numberDecrease=document.getElementById('numberDecrease');
numberDecrease.addEventListener('click',function(){
    let numberCount=document.getElementById('numberCount').value;
    if(numberCount>0){
        numberCount--;
    }
    document.getElementById('numberCount').value=numberCount;
    numberCountCalculation(numberCount);
})

const numberCountCalculation=(numberCount)=>{
    const calculation=numberCount*1130;
    document.getElementById('priceCount').value=calculation;
    const tax=.2*calculation;
    document.getElementById('tax').value=tax;
    const totalAmount=tax+calculation;
    document.getElementById('total').value=totalAmount;
    document.getElementById('totalNumberCount').value=numberCount;
    document.getElementById('subTotal').value=calculation;
    document.getElementById('totalTax').value=tax;
    document.getElementById('totalCost').value=totalAmount;
}
const checkOutNow=document.getElementById('checkOutNow');
checkOutNow.addEventListener('click',()=>{
    const checkOut=document.getElementById('checkOut');
    checkOut.style.display='none';
    const paymentNow=document.getElementById('paymentNow');
    paymentNow.style.display='block';
})
const paymentDone=document.getElementById('paymentDone');
paymentDone.addEventListener('click',()=>{
    const headerSection=document.getElementById('headerSection');
    headerSection.style.display='block';
    const mainSection=document.getElementById('mainSection');
    mainSection.style.display='block';
    const paymentNow=document.getElementById('paymentNow');
    paymentNow.style.display='none';
})
