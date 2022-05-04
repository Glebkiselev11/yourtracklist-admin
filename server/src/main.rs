use actix_web::{get, post, web, App, HttpResponse, HttpServer, Responder};
use serde::Deserialize;
const API_URL: (&str, u16) = ("127.0.0.1", 8080);

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    println!(
        "Server has been started at http://{}:{}",
        API_URL.0, API_URL.1
    );
    HttpServer::new(|| App::new().service(hello))
        .bind(API_URL)?
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
