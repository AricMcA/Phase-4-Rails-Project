class SpellSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :lethal
  belongs_to :user
end
