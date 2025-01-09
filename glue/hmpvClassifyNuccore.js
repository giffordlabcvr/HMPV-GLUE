
var ncbiNuccore;
var whereClause = "source.name like 'ncbi-nuccore-hmpv%'";
ncbiNuccore = glue.tableToObjects(glue.command(["list", "sequence", "sequenceID", "source.name", "-w", whereClause]));
//glue.log("INFO", "RESULT WAS ", ncbiNuccore);

var processed = 0;

_.each(ncbiNuccore, function(ncbiNuccore) {

	var sequenceID = ncbiNuccore.sequenceID;
	var sourceName = ncbiNuccore["source.name"]; // note: here can't use the dot notation (.) so use the bracket notation instead.

	var whereClause = "sequenceID = '" + sequenceID + "'";
	//glue.log("INFO", "ID RESULT WAS ", sequenceID);

	var genotypeResults;
	glue.inMode("/module/hmpvMaxLikelihoodGenotyper", function() {
		genotypeResults = glue.command(["genotype", "sequence", "-w", whereClause]);
		//glue.log("INFO", "Genotype RESULT WAS ", genotypeResults);			
	});

	var genotypeRows = genotypeResults.genotypeCommandResult.row;
	var speciesRow = genotypeRows[0].value;
	var speciesResult = speciesRow[1]
	var subtypeResult = speciesRow[2]
	var genotypeResult = speciesRow[3]
	//glue.log("INFO", "speciesRow RESULT WAS ", speciesRow);			
	//glue.log("INFO", "speciesResult RESULT WAS ", speciesResult);			
	//glue.log("INFO", "subtypeResult RESULT WAS ", subtypeResult);			

	if (speciesResult) {

		var species = speciesResult.replace("AL_HMPV_", "");
		glue.inMode("sequence/"+sourceName+"/"+sequenceID, function() {		
			glue.command(["set", "field", "species", species]);
		});
	
	}
	if (subtypeResult) {

		var subtype = subtypeResult.replace("AL_HMPV_", "");
		glue.inMode("sequence/"+sourceName+"/"+sequenceID, function() {
			glue.command(["set", "field", "subtype", subtype]);
		});
	
	}

	if (genotypeResult) {

		var genotype = genotypeResult.replace("AL_HMPV_", "");
		glue.inMode("sequence/"+sourceName+"/"+sequenceID, function() {
			glue.command(["set", "field", "genotype", genotype]);
		});
	
	}

	processed++;

	if(processed % 10 == 0) {
		glue.logInfo("Typed "+processed+" HMPV sequences. ");
		glue.command(["commit"]);
		glue.command(["new-context"]);
	}

});	
