This app uses the MVC architecture.
The views' responsible for updating the doms, which dispatches events to the controller.
The controller's responsible for bridging the views and the models by delegating the events dispatched by the views to the models, which 
issues commands to the views.
The models' responsible for updating the states, which are used to construct commands issued to the views.
The CFGS is the configuration values that are supposed to be edited by end users.
The EditCfgs is the API call for editing configuration values on the fly.
The Factory is the composition root and entry point of the whole app.