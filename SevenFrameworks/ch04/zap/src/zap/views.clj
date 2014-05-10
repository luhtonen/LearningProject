(ns zap.views
  :require [hiccup.page :refer [html5 include-js include-css]]
           [hiccup.form :refer [form-to text-field submit-button text-area]]
           [ring.util.response :as response]
           [zap.models :as models]
           )

(defn base-page [title & body]
  (html5
    [:head
     (include-css "/css/bootstrap.min.css")
     (include-css "/css/zap.css")
     [:title title]]
    [:body
     [:div {:class "navbar navbar-inverse"}
      [:div {:class :navbar-inner}
       [:a {:class :brand :href "/"} "Zap!"]
       [:form {:class "navbar-form pull-right"}
        [:input {:type :text :class :search-query :placeholder :Search}]]]]

     [:div.container (seq body)]]))

(defn projects []
  (base-page
    "Projects - Zap"
    [:div.row.admin-bar
     [:a {:href "/projects/new"}
      "Add Project"]]
    [:h1 "Project List"]
    [:ol
     (for [p (models/all-projects)]
       [:li [:a {:href (str "/project/" (:id p) "/issues")} (:name p)]])]))

(defn new-issue [id]
  (let [proj (models/project-by-id id)]
    (base-page
      (str "New Issue for " (:name proj) " - Zap")

      [:h1 "New Issue for " (:name proj)]
      (form-to
        [:post (str "/project/" (:id proj) "/issues")]
        (text-field {:class "span8"
                     :type :text
                     :placeholder "Title"} :title)
        [:br]
        (text-area {:class "span8"
                    :placeholder "Description"
                    :rows 5} :description)
        [:br]
        (submit-button {:class "btn btn-primary"} "Create Issue")))))
