export function rutValidator (rutCompleto) {
  if (!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test( rutCompleto )) return false
  const tmp = rutCompleto.split('-')
  let digv = tmp[1]
  const rut = tmp[0]
  if ( digv == 'K' ) digv = 'k'
  return (dv(rut) == digv )

}

export function dv (T){
  var M=0,S=1
  for(;T;T=Math.floor(T/10))
    S=(S+T%10*(9-M++%6))%11
  return S?S-1:'k'
}


export function clean (rut) {
  return typeof rut === 'string'
    ? rut.replace(/^0+|[^0-9kK]+/g, '').toUpperCase()
    : ''
}

export function validate (rut) {
  if (typeof rut !== 'string') {
    return false
  }
  if (!/^0*(\d{1,3}(\.?\d{3})*)-?([\dkK])$/.test(rut)) {
    return false
  }

  rut = clean(rut)

  var t = parseInt(rut.slice(0, -1), 10)
  var m = 0
  var s = 1

  while (t > 0) {
    s = (s + (t % 10) * (9 - m++ % 6)) % 11
    t = Math.floor(t / 10)
  }

  var v = s > 0 ? '' + (s - 1) : 'K'
  return v === rut.slice(-1)
}

export function format (rut) {
  rut = clean(rut)

  var result = rut.slice(-4, -1) + '-' + rut.substr(rut.length - 1)
  for (var i = 4; i < rut.length; i += 3) {
    result = rut.slice(-3 - i, -i) + '.' + result
  }

  return result.length === 1 && result === '-' ? undefined : result
}





export function validateRut (rut) {
  if (typeof rut !== 'string') {
    return false
  }
  if (!/^0*(\d{1,3}(\.?\d{3})*)-?([\dkK])$/.test(rut)) {
    return false
  }

  rut = clean(rut)

  var t = parseInt(rut.slice(0, -1), 10)
  var m = 0
  var s = 1

  while (t > 0) {
    s = (s + (t % 10) * (9 - m++ % 6)) % 11
    t = Math.floor(t / 10)
  }

  var v = s > 0 ? '' + (s - 1) : 'K'
  return v === rut.slice(-1)
}



export function formatRut (rut) {
  rut = clean(rut)

  var result = rut.slice(-4, -1) + '-' + rut.substr(rut.length - 1)
  for (var i = 4; i < rut.length; i += 3) {
    result = rut.slice(-3 - i, -i) + '.' + result
  }
  return result.length === 1 && result === '-' ? undefined : result
}


export function formatRutToSend (rut) {
  const cleanRut = clean(rut).substring(0, clean(rut).length - 1) + "-" + clean(rut).substring(clean(rut).length - 1)
  return cleanRut !== '-' ? cleanRut : undefined
}