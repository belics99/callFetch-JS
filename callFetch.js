 /*
 default options:
 ================
 options = {
 	method : 'POST',
 	header : {'Content-Type': 'application/json;charset=utf-8'},
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
 HEADER  - Content-Type...
 */
 callFetch = async ( {url= '', data = {}, func = (result = 'ok')=>{console.log(result)}, method = 'POST', header = {'Content-Type': 'application/json;charset=utf-8'} })=>{
    const  options = {
      method : method,
      header : header,
      body : JSON.stringify(data)
    }
    let response = await fetch(url, options)
    let result = await response.json()
    func(result)        
}
