



const storeReport = {
	LYS: "a", 
	Temp: "b",
	salesForecast:"b",
	morningSales:"b",
	nightSales:"b",
	dailyTotalsSales:"b",
	lastWeekSales:"b",
	lastYearLabor:"b",
	laborForecast:"b",
	morningLabor:"b",
	nightLabor:"b",
	dailyLabor:"b",
	lastWeekLabor:"b",
	lastYearHours:"b",
	forecastHours:"b",
	morningHours:"b",
	nightHours:"b",
	dailyTotalsHours:"b",
	lastWeekHours:"b",
	WindowsDoors: "a",
	SmallwareWashed: "a",
	WalkinsOrganized: "a",
	TableChairsLightfixturesCleaned:"a",
	SmallLargeSidesCups:"a",
	Stockroomorganizedandcleaned:"a",
	BathroomsCleaned: "incomplete",
	FloorsCleaned: "incomplete",
	MopSinkCleaned: "incomplete",
	BeverageStationCleaned: "incomplete",
	MicrowaveCleaned: "incomplete",
	BatterStationCleaned: "incomplete",
	CashierCounterCleaned: "incomplete",
	IceMachineCleaned: "incomplete",
	FreezerCleaned: "incomplete",
	SaucesRefilled: "incomplete",
	Comp: "incomplete",
	FryerRefilled: "incomplete",
	SmalleWaresRefilled: "incomplete",
	Pans: "incomplete",
	BirdCage: "incomplete",
	SodaNozzlesCleaned: "incomplete",
	FloorDrainsCleaned: "incomplete",
	SoapRestocked: "incomplete",
	CertifyingManager: "",
	CertifyingManager1: "",
	CertifyingManager2: "",
	CoolerShelvesEmployee: "incomplete",
	CoolerShelvesManager: "incomplete",
	BiscuitOvenEmployee: "incomplete",
	BiscuitOvenManager: "incomplete",
	PrepAreaShelvesEmployee: "incomplete",
	PrepAreaShelvesManager: "incomplete",
	LobbyandRRFloorsEmployee: "incomplete",
	LobbyandRRFloorsManager: "incomplete",
	OrganizeOfficeEmployee: "incomplete",
	OrganizeOfficeManager: "incomplete",
	WalkinWallsEmployee: "incomplete",
	WalkinWallsManager: "incomplete",
	ReachinGasketsEmployee: "incomplete",
	ReachinGasketsManager: "incomplete",
	EvaporatorCoilsEmployee: "incomplete",
	EvaporatorCoilsManager: "incomplete",
	PolishSSEmployee: "incomplete",
	PolishSSManager: "incomplete",
	CleanHighchairsEmployee: "incomplete",
	CleanHighchairsManager: "incomplete"

	

	//LYS: $("#lastYearSales").val(),
	//LYS1: 
}


$("#setProperties2").click(function(){
	//lastYearSales1 = $("#lastYearSales").val();
	 storeReport.LYS = $("#lastYearSales").val();
	 storeReport.salesForecast = $("#salesForecast").val();
	 storeReport.morningSales = $("#morningSales").val();
	 storeReport.nightSales = $("#nightSales").val();
	 storeReport.dailyTotalsSales = $("#dailyTotalsSales").val();
	 storeReport.lastWeekSales = $("#lastWeekSales").val();
	 storeReport.lastYearLabor = $("#lastYearLabor").val();
	 storeReport.laborForecast = $("#laborForecast").val();
	 storeReport.morningLabor = $("#morningLabor").val();
	 storeReport.nightHours = $("#nightHours").val();
	 storeReport.dailyTotalsHours = $("#dailyTotalsHours").val();
	 storeReport.lastWeekHours = $("#lastWeekHours").val();
	 
	if ($("#ncdsa1").prop("checked")) {
		storeReport.WindowsDoors = "Completed";
	};
	if ($("#ncdpd1").prop("checked")) {
		storeReport.SmallwareWashed = "Completed";
	};
	if ($("#ncdbw1").prop("checked")) {
		storeReport.WalkinsOrganized = "Completed";
	};
	if ($("#ncdsa2").prop("checked")) {
		storeReport.TableChairsLightfixturesCleaned = "Completed";
	};
	if ($("#ncdpd2").prop("checked")) {
		storeReport.SmallLargeSidesCups = "Completed";
	};
	if ($("#ncdbw2").prop("checked")) {
		storeReport.Stockroomorganizedandcleaned = "Completed";
	};
	if ($("#ncdsa3").prop("checked")) {
		storeReport.BathroomsCleaned = "Completed";
	};
	if ($("#ncdpd3").prop("checked")) {
		storeReport.FloorsCleaned = "Completed";
	};
	if ($("#ncdbw3").prop("checked")) {
		storeReport.MopSinkCleaned = "Completed";
	};
	if ($("#ncdsa4").prop("checked")) {
		storeReport.BeverageStationCleaned = "Completed";
	};
	if ($("#ncdpd4").prop("checked")) {
		storeReport.MicrowaveCleaned = "Completed";
	};
	if ($("#ncdbw4").prop("checked")) {
		storeReport.BatterStationCleaned = "Completed";
	};
	if ($("#ncdsa5").prop("checked")) {
		storeReport.CashierCounterCleaned = "Completed";
	};
	if ($("#ncdpd5").prop("checked")) {
		storeReport.IceMachineCleaned = "Completed";
	};
	if ($("#ncdbw5").prop("checked")) {
		storeReport.FreezerCleaned = "Completed";
	};
	if ($("#ncdsa6").prop("checked")) {
		storeReport.SaucesRefilled = "Completed";
	};
	if ($("#ncdpd6").prop("checked")) {
		storeReport.Comp = "Completed";
	};
	if ($("#ncdbw6").prop("checked")) {
		storeReport.FryerRefilled = "Completed";
	};
	if ($("#ncdsa7").prop("checked")) {
		storeReport.SmalleWaresRefilled = "Completed";
	};
	if ($("#ncdpd7").prop("checked")) {
		storeReport.Pans = "Completed";
	};
	if ($("#ncdbw7").prop("checked")) {
		storeReport.BirdCage = "Completed";
	};
	if ($("#ncdsa8").prop("checked")) {
		storeReport.SodaNozzlesCleaned = "Completed";
	};
	if ($("#ncdpd8").prop("checked")) {
		storeReport.FloorDrainsCleaned = "Completed";
	};
	if ($("#ncdbw8").prop("checked")) {
		storeReport.SoapRestocked = "Completed";
	};
	if ($("#smi").prop("checked")) {
		storeReport.CertifyingManager = "AG";
	};
	if ($("#scmi").prop("checked")) {
		storeReport.CertifyingManager1 = "Vraj";
	};
	if ($("#cmi").prop("checked")) {
		storeReport.CertifyingManager2 = "MSM";
	};
	if ($("#ccc1").prop("checked")) {
		storeReport.CoolerShelvesEmployee = "Jeff";
	};
	if ($("#mcd1").prop("checked")) {
		storeReport.CoolerShelvesManager = "Giranamo";
	};
	if ($("#ccc2").prop("checked")) {
		storeReport.BiscuitOvenEmployee = "Jeff";
	};
	if ($("#mcd2").prop("checked")) {
		storeReport.BiscuitOvenManager = "Giranamo";
	};
	if ($("#ccc3").prop("checked")) {
		storeReport.PrepAreaShelvesEmployee = "Jeff";
	};
	if ($("#mcd3").prop("checked")) {
		storeReport.PrepAreaShelvesManager = "Giranamo";
	};
	if ($("#ccc4").prop("checked")) {
		storeReport.LobbyandRRFloorsEmployee = "Jeff";
	};
	if ($("#mcd4").prop("checked")) {
		storeReport.LobbyandRRFloorsManager = "Giranamo";
	};
	if ($("#ccc5").prop("checked")) {
		storeReport.OrganizeOfficeEmployee = "Jeff";
	};
	if ($("#mcd5").prop("checked")) {
		storeReport.OrganizeOfficeManager = "Giranamo";
	};
	if ($("#ccc6").prop("checked")) {
		storeReport.WalkinWallsEmployee = "Jeff";
	};
	if ($("#mcd6").prop("checked")) {
		storeReport.WalkinWallsManager = "Giranamo";
	};
	if ($("#ccc7").prop("checked")) {
		storeReport.ReachinGasketsEmployee = "Jeff";
	};
	if ($("#mcd7").prop("checked")) {
		storeReport.ReachinGasketsManager = "Giranamo";
	};
	if ($("#ccc8").prop("checked")) {
		storeReport.EvaporatorCoilsEmployee = "Jeff";
	};
	if ($("#mcd8").prop("checked")) {
		storeReport.EvaporatorCoilsManager = "Giranamo";
	};
	if ($("#ccc9").prop("checked")) {
		storeReport.PolishSSEmployee = "Jeff";
	};
	if ($("#mcd9").prop("checked")) {
		storeReport.PolishSSManager = "Giranamo";
	};
	if ($("#ccc10").prop("checked")) {
		storeReport.CleanHighchairsEmployee = "Jeff";
	};
	if ($("#mcd10").prop("checked")) {
		storeReport.CleanHighchairsManager = "Giranamo";
	};



	console.log(storeReport);
	console.log(lastYearSales);
});

$("#setProperties3").click(function(){
	//lastYearSales1 = $("#lastYearSales").val();
	 storeReport.Temp = $("#cTemp1").val(),
	//LYS1: 

	console.log(storeReport);
	console.log(lastYearSales);
});


console.log(storeReport);





