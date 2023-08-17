document.getElementById('btn-deposit').addEventListener('click',function(){
   

    //get input deposit field
    const depositField = document.getElementById('deposit-field')
    const newDepositAmountString =depositField.value
    const newDepositAmount = parseFloat(newDepositAmountString)

    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText
    const previousDepositTotal = parseFloat(previousDepositTotalString)
    

    const currentDepositTotal = newDepositAmount + previousDepositTotal
    //set deposit total
    depositTotalElement.innerText= currentDepositTotal

    //update balance field
    const balanceTotalElement = document.getElementById('balance-total')
    const previousBalanceTotalString = balanceTotalElement.innerText
    const previousBalanceTotal =parseFloat(previousBalanceTotalString)

    //Calculate current Balance
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount
    //set balance total
    balanceTotalElement.innerText = currentBalanceTotal


    //clear deposit field
    depositField.value='';
})