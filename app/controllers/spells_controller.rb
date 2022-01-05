class SpellsController < ApplicationController
    before_action :authorize

    def index
        spells = current_user.spells
        render json: spells
    end

    def create
        spell = current_user.spells.create(spell_params)
        if spell.valid?
            render json: spell
        else
            render json: { errors: spell.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def show
        spell = current_user.spells.find_by(id: params[:id])
        if spell
            render json: spell
        else
            render json: { error: "Not found" }, status: :unauthorized
        end
    end

    def destroy
        
        spell = current_user.spells.find_by(id: params[:id])
        
        if spell
            spell.destroy
            head :no_content
        else
            render json: { error: "Not found" }, status: :not_found
        end
    end

    def update
        spell = current_user.spells.find_by(id: params[:id])
        if spell
            spell.update(spell_params)
            render json: spell, status: :accepted
        else
            render json: { error: "Spell not found "}, status: :not_found
        end
    end

    def darkarts
        spells = Spell.where("lethal = ?", "Very Lethal")
        render json: spells
    end

    private

    def current_user
        User.find_by(id: session[:user_id])
    end

    def spell_params
        params.permit(:name, :description, :lethal)
    end

    def authorize
        return render json: {error: "Not Authorized"}, status: :unauthorized unless session.include? :user_id
    end
end
