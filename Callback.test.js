const fetchData = require('./Callback');
/*
test("Callback Function Testing",()=>{
expect(fetchData()).toBe("Hello")
});


test("Callback Function Testing",()=>{
    fetchData();
    });
*/
    test("Callback Function Testing",(done)=>{
        function callback(data)
        {
            try{
                expect(data).toBe("Hello");
                //document();
                done();
            }
        catch(err)
        {
           done(err);
           // document(err)
        }
        }
        fetchData(callback);
        });
/*
        test("Callback Function Testing",()=>{
            function callback(data)
            {
                try{
                    expect(data).toBe("Hello")
                    
                }
            catch(err)
            {
             
               document(err)
            }
            }
            fetchData();
            });
          

            test("Callback Function Testing",(done)=>{
                function callback(data)
                {
                    try{
                        expect(data).toBe("Hi");
                        //document();
                        done();
                    }
                catch(err)
                {
                   done(err);
                   // document(err)
                }
                }
                fetchData(callback);
                });
                  */