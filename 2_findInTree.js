const find = fileName => tree => {

  // search in files
  for (treeFileName of tree.files){
     
    if (fileName === treeFileName){  // file found      
      return true;
    }
	
  }
  
  // file not found in current foler, search in subfolders recursively 
   for (subfolder of tree.subFolders){      
           
		   let fileFound = find (fileName) (subfolder);
     
     // if file found return true, otherwise continue searching
     		if (fileFound)
				return true;
      }
  
  // if all subfolder searched and file not found return false
 return false;
};

const tree = { 
	name : "home", 
	files : ["notes.txt","todo.txt"], 
	subFolders: [	
		{ name : "payroll", 
		  files : ["paper.pdf","funds.csv"], 
		  subFolders: [] 
		}, 
		{ name: "misc", 
		  files : ["summer1.jpg","summer2.jpg", "summer3.jpg"], 
		  subFolders: [
			{ name : "logs", 
			  files : ["logs1","logs2","logs3","logs4"], 
			  subFolders: [] 
		  }] 
	}] 
}; 

console.log(find("paper.pdf")(tree));
console.log(find("randomfile")(tree));



