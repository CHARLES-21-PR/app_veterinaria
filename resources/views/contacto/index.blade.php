<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-SgOJa3DmI69IUzQ2PVdRZhwQ+dy64/BUtbMJw1MZ8t5HZApcHrRKUc4W0kG879m7" crossorigin="anonymous">
    <title>Document</title>
</head>
<body>
    
        <form action="{{route('Contacto.store')}}" method="POST">
            @csrf
            <div class="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Email:</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" name="email" />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Consulta:</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="mensaje"></textarea>
            </div>
            
            <button type="submit" className="btn btn-primary">Enviar</button>
        
        </form>
        
    
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/js/bootstrap.bundle.min.js" integrity="sha384-k6d4wzSIapyDyv1kpU366/PK5hCdSbCRGRCMv+eplOQJWyd1fbcAu9OCUj5zNLiq" crossorigin="anonymous"></script>
</body>
</html>