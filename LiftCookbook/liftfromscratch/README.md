# Lift project from scratch

This project shows you how to create a Lift SBT project from scratch, without downloading anything from the Lift website.

## Project structure
* project root directory  
  | build.sbt
  - project/  
    | plugins.sbt
  - src/
    - main/
      - scala/
        - bootstrap/  
          | Boot.scala
        - org/
          - yourorganization/
            - liftfromscratch/  
              | &lt;your Scala code goes here>
      - webapp/  
        | index.html  
        | &lt;any other web resources - images, HTML, JavaScript, etc - go here>
        - WEB-INF/  
          | web.xml
    - test/
      - scala/
        - org/
          - yourorganization/
            - liftfromscratch/  
              | &lt;your tests go here>
