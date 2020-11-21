function calcular() {
    let multiplier = document.getElementById('mult')
    let res = document.getElementById('res')
    let tab = document.getElementById('seltab')

    if (multiplier.value.length == 0) {
        window.alert('[ERRO] - Número inválido!')
    } else {
        let mult = Number(multiplier.value)
        let c = 0
        tab.innerHTML = ""
        res.innerHTML = `A Tabuada de ${mult} é:`

        while (c<=10) {
            let item = document.createElement('option')
            item.text = ` ${c} x ${mult} = ${mult*c}`
            item.value = `tab ${c}`
            tab.appendChild(item)
            c++
        }
    }
}