use actix_web::{get, post, web, App, HttpResponse, HttpServer, Responder};
use serde::Deserialize;

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(|| App::new().service(hello))
        .bind(("127.0.0.1", 8080))?
        .run()
        .await
}

#[get("/")]
async fn hello() -> impl Responder {
    HttpResponse::Ok().body("Yourtracklist v2 server")
}

#[post("/create")]
async fn create(body: web::Json<NewRelease>) -> String {
    format!("{}, {}", body.author, body.name)
}

#[derive(Deserialize)]
struct NewRelease {
    name: String,
    author: String,
}
