
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
   











