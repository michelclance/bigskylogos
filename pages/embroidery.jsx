

const files = [
    {
    
        source:
        'https://nebula.wsimg.com/dd802a25a9a31d05b0fc5992dc7f8fe0?AccessKeyId=2363B301CE343353B92A&disposition=0&alloworigin=1'    },
    {
        source:
        'https://nebula.wsimg.com/e4e5f813c082203678f3b1ac086c8ba3?AccessKeyId=2363B301CE343353B92A&disposition=0&alloworigin=1'        },
    {
        source:
        'https://nebula.wsimg.com/287bd019ef851a33f297c53d1bd40f6f?AccessKeyId=2363B301CE343353B92A&disposition=0&alloworigin=1'        },
    {
        source:
        'https://nebula.wsimg.com/f7a0483d1001644387e5e6582b098c01?AccessKeyId=2363B301CE343353B92A&disposition=0&alloworigin=1'        },
    {
        source:
        'https://nebula.wsimg.com/1692e2f7bf6866a2afd9d9596065a0e2?AccessKeyId=2363B301CE343353B92A&disposition=0&alloworigin=1'        },
    {
        source:
        'https://nebula.wsimg.com/d57e30714dc0af25810f726892d4f2f6?AccessKeyId=2363B301CE343353B92A&disposition=0&alloworigin=1'        },
    {
        source:
        'https://nebula.wsimg.com/99dd671a9325e44801b8057562219e04?AccessKeyId=2363B301CE343353B92A&disposition=0&alloworigin=1'        },
    {
        source:
        'https://nebula.wsimg.com/b407a672558017f419c91cbb9b87c07b?AccessKeyId=2363B301CE343353B92A&disposition=0&alloworigin=1'        },
   
  ]
  
  function Embroid() {
    return (
<div> 
    <br></br>
    <br></br>
    <br></br>
    <br></br>
      <ul role="list" className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
        {files.map((file) => (
          <li key={file.source} className="relative w-50 h-50 mt-50">
            <div className="group aspect-w-10 aspect-h-7 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 bg-transparent">
              <img src={file.source} alt="" className="pointer-events-none object-cover group-hover:opacity-75 position:absolute" />
              <button type="button" className="absolute inset-0 focus:outline-none">
                <span className="sr-only">View details for {file.title}</span>
              </button>
            </div>
            <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">{file.title}</p>
            <p className="pointer-events-none block text-sm font-medium text-gray-500">{file.size}</p>
          </li>
        ))}
      </ul>
      </div>
    )
  }
  
  export default Embroid