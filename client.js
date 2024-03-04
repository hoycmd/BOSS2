
var admin = ["2827CD16AE7CC982"];
player.function.Main.Value = true;
player.function.MainInfinity.Value = true;
player.function.Melee.Value = true;
player.function.Secondary.Value = true;
player.function.SecondaryInfinity.Value = true;
player.function.ExpIosive.Value = true;
player.function.ExplosiveInfinity.Value = true;
player.function.Build.Value = true;
player.function.BuildInfinity.Value = true;


Build.GetContext().Pipette.Value = true;
Build.GetContext().FloodFill.Value = true;
Build.GetContext().FillQuad.Value = true;
Build.GetContext().RemoveQuad.Value = true;
Build.GetContext().BalkLenChange.Value = true;
Build.GetContext().FlyEnable.Value = true;
Build.GetContext().SetSkyEnable.Value = true;
Build.GetContext().GenMapEnable.Value = true;
Build.GetContext().ChangeCameraPointsEnable.Value = true;
Build.GetContext().QuadChangeEnable.Value = true;
Build.GetContext().BuildModeEnable.Value = true;
Build.GetContext().CollapseChangeEnable.Value = fulse;
Build.GetContext().RenameMapEnable.Value = true;
Build.GetContext().ChangeMapAuthorsEnable.Value = true;
Build.GetContext().LoadMapEnable.Value = true;
Build.GetContext().ChangeSpawnsEnable.Value = true;
Build.GetContext().BuildRangeEnable.Value = true;

player.function.immortal.Value = true;
player.function.Skin.Type.Value = 1;

//
var des "color=Yellow>ПОКУПКИ</a>ОТ SSODM!!!";
Teams.Get("Red").Properties.Get("Des").Value = des;  
Ui.GetContext().TeamProp2.Value = { Team: "Blue", Prop: "Des" };   
Teams.Get("Blue").Properties.Get("Des").Value = des;  
Ui.GetContext().TeamProp1.Value = { Team: "Red", Prop: "Des" };

Damage.GetContext().FriendlyFire.Value = true;

// ��������� ��������� �������� �������
Damage.GetContext().DamageOut.Value = GameMode.Parameters.GetBool("Damage");
BreackGraph.OnlyPlayerBlocksDmg = GameMode.Parameters.GetBool("PartialDesruction");
BreackGraph.WeakBlocks = GameMode.Parameters.GetBool("LoosenBlocks");
Build.GetContext().FloodFill.Value =  GameMode.Parameters.GetBool("FloodFill");
Build.GetContext().FillQuad.Value =  GameMode.Parameters.GetBool("FillQuad");
Build.GetContext().RemoveQuad.Value =  GameMode.Parameters.GetBool("RemoveQuad");
Build.GetContext().FlyEnable.Value =  GameMode.Parameters.GetBool("Fly");
// задаем что выводить в лидербордах
LeaderBoard.PlayerLeaderBoardValues = [
 {
  Value: "Kills",
  DisplayName: "Убийства",
  ShortDisplayName: "Убийства"
 },
 {
  Value: "Deaths",
  DisplayName: "Смерти",
  ShortDisplayName: "Смерти"
 },
{
  Value: "Status",
  DisplayName: "Статус",
  ShortDisplayName: "Статус"
 },
 {
  Value: "Scores",
  DisplayName: "Очки",
  ShortDisplayName: "Очки"
 }
];
LeaderBoard.TeamLeaderBoardValue = {
 Value: "Deaths",
 DisplayName: "Statistics\Deaths",
 ShortDisplayName: "Statistics\Deaths"
};




// ������ ��������� ������ ��� �����
BreackGraph.BreackAll = true;
// ���������� ���������� ������
Ui.GetContext().QuadsCount.Value = true;
// ��� ������������ �����
Build.GetContext().Pipette.Value = true;
Build.GetContext().BalkLenChange.Value = true;
Build.GetContext().SetSkyEnable.Value = true;
Build.GetContext().GenMapEnable.Value = true;
Build.GetContext().ChangeCameraPointsEnable.Value = true;
Build.GetContext().QuadChangeEnable.Value = true;
Build.GetContext().BuildModeEnable.Value = true;
Build.GetContext().CollapseChangeEnable.Value = true;
Build.GetContext().RenameMapEnable.Value = true;
Build.GetContext().ChangeMapAuthorsEnable.Value = true;
Build.GetContext().LoadMapEnable.Value = true;
Build.GetContext().ChangeSpawnsEnable.Value = true;

// ��������� ����
Properties.GetContext().GameModeName.Value = "GameModes/Peace";
// ������� �������
red = GameMode.Parameters.GetBool("RedTeam");
blue = GameMode.Parameters.GetBool("BlueTeam");
if (red || !red && !blue) {
 Teams.Add("Red", "<color=red>АДМИНЫ</a>", { r
: 80 });
 Teams.Get("Red").Spawns.SpawnPointsGroups.Add
(1);
}

// ������ ���������  
Ui.GetContext().Hint.Value = "прив"; 
  
des = "@Vanhek34";  
sed = "@Vanhek34";  
Teams.Get("Blue").Properties.Get("Des").Value = des;  
Ui.GetContext().TeamProp1.Value = { Team: "Red", Prop: "sed" };  
Teams.Get("Red").Properties.Get("sed").Value = sed; 
 
Ui.GetContext().TeamProp2.Value = { Team: "Blue", Prop: "Des" };
var maxDeaths = Players.MaxCount * 6;
Teams.Get("Red").Properties.Get("Deaths").Value = maxDeaths;
Teams.Get("Blue").Properties.Get("Deaths").Value = maxDeaths;
// задаем что выводить в лидербордах
LeaderBoard.PlayerLeaderBoardValues = [
 {
  Value: "Status",
  DisplayName: "<color=orange>Status</a>",
  ShortDisplayName: "<color=orange>Status</a>"
 },
 {
  Value: "Scores",
  DisplayName: "<color=pink>money</a>",
  ShortDisplayName: "<color=pink>money</a>"
 },
 {
  Value: "Spawns",
  DisplayName: "Donat money",
  ShortDisplayName: "Donat money"
 },
 {

  Value: "Kills",
  DisplayName: "color=yellow>пропуск</a>",
  ShortDisplayName: "<color=yellow>пропуск</a>", }



];
LeaderBoard.TeamLeaderBoardValue = {
 Value: "Deaths",
 DisplayName: "<color=gooboy>death</a>",
 ShortDisplayName: "<color=gooboy>death</a>",


// создаем команды
red = GameMode.Parameters.GetBool("RedTeam");
blue = GameMode.Parameters.GetBool("BlueTeam");
if (red || !red && !blue) {
 Teams.Add("Red",
 "color=Red>АДМИНЫ</a>",{r:80});
  Teams.Get("Red").Spawns.SpawnPointsGroups.Add
  (1);
  }

  if (blue || !red && !blue) {
 Teams.Add("Blue", "<color=orange>ИГРОКИ</a>", { g: 128 });
 Teams.Get("Blue").Spawns.SpawnPointsGroups.Add(1);
 if(GameMode.Parameters.GetBool("BlueHasNothing")){
  var inventory = Inventory.GetContext();
  Teams.Get("Blue").Inventory.Main.Value = false;
  Teams.Get("Blue").Inventory.Secondary.Value = false;
  Teams.Get("Blue").Inventory.Melee.Value = false;
  Teams.Get("Blue").Inventory.ExpIosive.Value = false;
  Teams.Get("Blue").Inventory.Build.Value = false;

  Damage.GetContext().FriendlyFire.Value = true;

// ��������� ��������� �������� �������
Damage.GetContext().DamageOut.Value = GameMode.Parameters.GetBool("Damage");
BreackGraph.OnlyPlayerBlocksDmg = GameMode.Parameters.GetBool("PartialDesruction");
BreackGraph.WeakBlocks = GameMode.Parameters.GetBool("LoosenBlocks");
Build.GetContext().FloodFill.Value =  GameMode.Parameters.GetBool("FloodFill");
Build.GetContext().FillQuad.Value =  GameMode.Parameters.GetBool("FillQuad");
Build.GetContext().RemoveQuad.Value =  GameMode.Parameters.GetBool("RemoveQuad");
Build.GetContext().FlyEnable.Value =  GameMode.Parameters.GetBool("Fly");
// задаем что выводить в лидербордах
LeaderBoard.PlayerLeaderBoardValues = [
 {
  Value: "Kills",
  DisplayName: "Убийства",
  ShortDisplayName: "Убийства"
 },
 {
  Value: "Deaths",
  DisplayName: "Смерти",
  ShortDisplayName: "Смерти"
 },
{
  Value: "Status",
  DisplayName: "Статус",
  ShortDisplayName: "Статус"
 },
 {
  Value: "Scores",
  DisplayName: "Очки",
  ShortDisplayName: "Очки"
 }
];
LeaderBoard.TeamLeaderBoardValue = {
 Value: "Deaths",
 DisplayName: "Statistics\Deaths",
 ShortDisplayName: "Statistics\Deaths"
};




// ������ ��������� ������ ��� �����
BreackGraph.BreackAll = true;
// ���������� ���������� ������
Ui.GetContext().QuadsCount.Value = true;
// ��� ������������ �����
Build.GetContext().Pipette.Value = true;
Build.GetContext().BalkLenChange.Value = true;
Build.GetContext().SetSkyEnable.Value = true;
Build.GetContext().GenMapEnable.Value = true;
Build.GetContext().ChangeCameraPointsEnable.Value = true;
Build.GetContext().QuadChangeEnable.Value = true;
Build.GetContext().BuildModeEnable.Value = true;
Build.GetContext().CollapseChangeEnable.Value = true;
Build.GetContext().RenameMapEnable.Value = true;
Build.GetContext().ChangeMapAuthorsEnable.Value = true;
Build.GetContext().LoadMapEnable.Value = true;
Build.GetContext().ChangeSpawnsEnable.Value = true;

// ��������� ����
Properties.GetContext().GameModeName.Value = "GameModes/Peace";
// ������� �������
red = GameMode.Parameters.GetBool("RedTeam");
blue = GameMode.Parameters.GetBool("BlueTeam");
if (red || !red && !blue) {
 Teams.Add("Red", "<color=red>АДМИНЫ</a>", { r
: 80 });
 Teams.Get("Red").Spawns.SpawnPointsGroups.Add
(1);
}

// ������ ���������  
Ui.GetContext().Hint.Value = "прив"; 
  
des = "@Vanhek34";  
sed = "@Vanhek34";  
Teams.Get("Blue").Properties.Get("Des").Value = des;  
Ui.GetContext().TeamProp1.Value = { Team: "Red", Prop: "sed" };  
Teams.Get("Red").Properties.Get("sed").Value = sed; 
 
Ui.GetContext().TeamProp2.Value = { Team: "Blue", Prop: "Des" };
var maxDeaths = Players.MaxCount * 6;
Teams.Get("Red").Properties.Get("Deaths").Value = maxDeaths;
Teams.Get("Blue").Properties.Get("Deaths").Value = maxDeaths;
  
// задаем что выводить в лидербордах
LeaderBoard.PlayerLeaderBoardValues = [
 {
  Value: "Status",
  DisplayName: "<color=orange>Status</a>",
  ShortDisplayName: "<color=orange>Status</a>"
 },
 {
  Value: "Scores",
  DisplayName: "<color=pink>money</a>",
  ShortDisplayName: "<color=pink>money</a>"
 },
 {
  Value: "Spawns",
  DisplayName: "Donat money",
  ShortDisplayName: "Donat money"
 },
 {

  Value: "Kills",
  DisplayName: "color=yellow>пропуск</a>",
  ShortDisplayName: "<color=yellow>пропуск</a>", }



];
LeaderBoard.TeamLeaderBoardValue = {
 Value: "Deaths",
 DisplayName: "<color=gooboy>death</a>",
 ShortDisplayName: "<color=gooboy>death</a>"
};






  
   











