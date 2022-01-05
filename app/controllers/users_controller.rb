class UsersController < ApplicationController
    def create
        user = User.create(user_params)
        if user.valid?
            session[:user_id] = user.id
            render json: user
        else
            render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def show
        user = User.find_by(id: session[:user_id])
        if user
            render json: user
        else
            render json: {error: "Not Autorized"}, status: :unauthorized
        end
    end

    def index
        user = User.all
        render json: user
    end

    def spells_index
        user = User.find(params[:user_id])
        # byebug
        spells = user.spells
        # byebug
        render json: spells, include: :user
    end

    private

    def user_params
        params.permit(:username, :password, :password_confirmation)
    end
end
