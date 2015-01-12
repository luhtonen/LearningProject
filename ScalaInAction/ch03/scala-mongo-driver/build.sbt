lazy val commonSettings = Seq(
    organization := "com.elu.datacom",
    version := "0.1.0",
    scalaVersion := "2.11.4"
)

lazy val root = (project in file(".")).
    settings(commonSettings:_*).
    settings(
        name := "scala mongo client",
        libraryDependencies += "org.mongodb" % "mongo-java-driver" % "2.12.4"
    )