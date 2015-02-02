import ScalaxbKeys._

lazy val commonSettings = Seq(
  organization := "org.elu",
  scalaVersion := "2.11.5"
)

lazy val scalatest = "org.scalatest" %% "scalatest" % "2.2.1" % "test"
lazy val scalaXml = "org.scala-lang.modules" %% "scala-xml" % "1.0.2"
lazy val scalaParser = "org.scala-lang.modules" %% "scala-parser-combinators" % "1.0.1"
lazy val dispatchV = "0.11.2"
lazy val dispatch = "net.databinder.dispatch" %% "dispatch-core" % dispatchV

lazy val root = (project in file(".")).
  settings(commonSettings: _*).
  settings(
    name := "wssample",
    libraryDependencies ++= Seq(dispatch, scalatest),
    libraryDependencies ++= {
      if (scalaVersion.value startsWith "2.11") Seq(scalaXml, scalaParser)
      else Seq()
    }
  ).
  settings(scalaxbSettings: _*).
  settings(
    sourceGenerators in Compile += (scalaxb in Compile).taskValue,
    dispatchVersion in (Compile, scalaxb) := dispatchV,
    async in (Compile, scalaxb)           := false,
    packageName in (Compile, scalaxb)     := "org.elu"
  )

version := "1.0"

