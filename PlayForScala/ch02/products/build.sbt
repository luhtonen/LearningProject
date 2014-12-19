name := "products"

version := "1.0"

lazy val `products` = (project in file(".")).enablePlugins(PlayScala)

scalaVersion := "2.11.1"

libraryDependencies ++= Seq(
  jdbc ,
  anorm ,
  cache ,
  ws ,
  "org.webjars" %% "webjars-play" % "2.3.0-2",
  "org.webjars" % "bootstrap" % "3.1.1-2")

unmanagedResourceDirectories in Test <+=  baseDirectory ( _ /"target/web/public/test" )  