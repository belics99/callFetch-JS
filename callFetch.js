 /*
 default options:
 ================
 options = {
 	method : 'POST',
 	header : {'Content-Type': 'application/json;charset=utf-8'},
 	body : JSON.stringify(data)
 }
 
 PARAMS:
 ========================
 URL, DATA, FUNC, OPTIONS
 ------------------------
 URL     - endpoint
 DATA    - data for endpoint
 FUNC    - callback function 
 OPTIONS - options for fetch
 */
 callFetch = async ( {url= '', data = {}, func = (result)=>{console.log(result)}, options = {method : 'POST', header : {'Content-Type': 'application/json;charset=utf-8'}, body : JSON.stringify(data)}} )=>{
    const opt = options
    let response = await fetch(url, options)
    let result = await response.json()
    func(result)        
}
