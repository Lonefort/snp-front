import url from './urlConstants.js'

export const getShippingOrders = () => fetch(url.apiRequestURL)
  .then(response => response.json())

export const handleAddressValidation = (addr, city, zip) => fetch(url.getAddressValidationURL(addr, city, zip))
  .then(response => response.json())

export const postShippingOrder = (data) => fetch(url.apiRequestURL, {
    method: 'POST',
    headers:{
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  .then(res => res.json())
    .then(response => console.log('Success:', JSON.stringify(response)))
    .catch(error => console.error('Error:', error));