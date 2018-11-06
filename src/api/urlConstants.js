const url = {
  apiRequestURL:'https://snp-restfull.herokuapp.com/orders', 
  avoidCorsProxy: 'https://cors-anywhere.herokuapp.com/',
  getAddressValidationURL : (addr, city, zip) => `${url.avoidCorsProxy}https://www.yaddress.net/api/Address?AddressLine1=${addr}&AddressLine2=${city}%20${zip}&UserKey=`
}

export default url;
