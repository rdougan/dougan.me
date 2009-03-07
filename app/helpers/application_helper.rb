# Methods added to this helper will be available to all templates in the application.
module ApplicationHelper
  def snippet(text, wordcount, omission)
   text.split[0..(wordcount-1)].join(" ") + (text.split.size > wordcount ? "" + omission : "")
  end
end
