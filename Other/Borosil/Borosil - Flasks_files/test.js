function showdiv(id)
{
	if(id == 1)
	{//alert("helo");
		document.getElementById('test2').style.display = "none";
		document.getElementById('test1').style.display = "block";
		document.getElementById('data').style.margin = "195px";
		document.getElementById('sel_tab1').setAttribute("class", "current");
		document.getElementById('sel_tab2').setAttribute("class", "");
	}
	else
	{//alert("hi");
		document.getElementById('test1').style.display = "none";
		document.getElementById('test2').style.display = "block";
		document.getElementById('data').style.margin = 0;
		document.getElementById('sel_tab1').setAttribute("class", "");
		document.getElementById('sel_tab2').setAttribute("class", "current");
	}
}
