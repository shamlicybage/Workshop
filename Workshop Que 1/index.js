$(document).ready(()=>{
    $(".showall").click(()=>{
        $("#allShow").show();
        $(".showall").css("backgroundColor","lightgreen");
        $(".redB").css("backgroundColor","grey");
        $("#yellowB").css("backgroundColor","grey");
        $("#orangeB").css("backgroundColor","grey");
        $(".orange").show();
        $(".yellow").show();
        $(".red").show();
    });

    $(".redB").click(()=>{
        $(".showall").css("backgroundColor","grey");
        $("#yellowB").css("backgroundColor","grey");
        $("#orangeB").css("backgroundColor","grey");
        console.log("red clicked")
        $("#allShow").show();
        $(".red").show();
        $(".orange").hide();
        $(".yellow").hide();
        $(".redB").css("backgroundColor","lightgreen");
    });

    $("#yellowB").click(()=>{
        $(".showall").css("backgroundColor","grey");
        $("#orangeB").css("backgroundColor","grey");
        $(".redB").css("backgroundColor","grey");
        console.log("yellow clicked")
        $("#allShow").show();
        $(".yellow").show();
        $(".red").hide();
        $(".orange").hide();
        
        $("#yellowB").css("backgroundColor","lightgreen");
    });

    $("#orangeB").click(()=>{
        $(".showall").css("backgroundColor","grey");
        $("#yellowB").css("backgroundColor","grey");
        $("#orangeB").css("backgroundColor","grey");
        console.log("yellow clicked")
        $("#allShow").show();
        $(".yellow").hide();
        $(".red").hide();
        $(".orange").show();
        
        $("#orangeB").css("backgroundColor","lightgreen");
    });
}
 

  

  
)