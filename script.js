function gerar()
{
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')

    //validação do valor inserido
    if (num.value.length == 0)
    {
        window.alert('Insira um numero!')
    }
    else
    {
        let c = 1
        let n = Number(num.value)

        //geração da tabuada
        while(c <= 10)
        {
            let op = document.createElement('option')
            op.text = `${n} x ${c} = ${n*c}`
            tab.value = `tab${c}`
            tab.appendChild(op)
            c++
        }
    }
}
