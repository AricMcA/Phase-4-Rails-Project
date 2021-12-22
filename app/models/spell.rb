class Spell < ApplicationRecord
    
    validates :name, :description, :lethal, presence: true
    
    belongs_to :user

end
