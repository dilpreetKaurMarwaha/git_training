$(document).ready(function()
{
	if($("#selCntry").length>0)
	{
		$("#selCntry").change(function()
		{
			var option = $(this).find('option:selected').val();
			//console.log(option);
			
			$.ajax(
			{
				url: "../select/php/state.php",
				type:'post',
				data :{value:option},
			
				success: function(result)
				{
					
					
					var json=$.parseJSON(result);
					var i=0;
					$("#selState").append('<option value="Select State">Select State</option>');
					$.each(json,function(index,value)
					{
						 $("#selState").append('<option value='+index+'>'+value+'</option>');
						
					
					});
					
					$("#selState").append('</select>');
					$("#selState").show();
				}
			});
		});
	};
		
		$("#selState").change(function()
		{
			var option = $(this).find('option:selected').val();
			console.log(option);
			
			$.ajax(
			{
				url: "../select/php/state.php",
				type:'post',
				data :{value:option},
			
				success: function(result)
				{
					
					
					var json=$.parseJSON(result);
					var i=0;
					var j='<select id="selCity"><option value="Select City">Select City</option>';
					$.each(json,function(index,value)
					{
						 j+='<option value='+index+'>'+value+'</option>';
						
					
					});
					console.log(j);
					j+='</select>';
					$("#selState").after(j);

							
						
					
				}
			});
		});
	
});	
