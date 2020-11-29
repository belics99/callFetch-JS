 /*
 default options:
 ================
 options = {
 	method : 'POST',
 	headers : {'Content-Type': 'application/json;charset=utf-8'},
 	body : JSON.stringify(data)
 }
 
 PARAMS:
 ================================
 URL, DATA, FUNC, METHOD, HEADER
 --------------------------------
 URL     - endpoint
 DATA    - data for endpoint
 FUNC    - callback function 
 METHOD  - post/get...
 HEADERS  - Content-Type...
 */
 async function callFetch( {url= '', data = {}, func = (result = 'ok')=>{console.log(result)}, method = 'POST', headers = {'Content-Type': 'application/json;charset=utf-8'} })=>{
    const  options = {
      method : method,
      headers : headers,
      body : JSON.stringify(data)
    }
    let response = await fetch(url, options)
    let result = await response.json()
    func(result)        
}
