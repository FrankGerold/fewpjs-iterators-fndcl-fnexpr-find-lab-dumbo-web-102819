function superbowlWin(teamArray) {
  let gam = teamArray.find((game) => game.result === "W")
  if (gam){return gam.year}else{return undefined}
  // if ()) {
  //   return game.year
  // }
  // else return undefined
}
