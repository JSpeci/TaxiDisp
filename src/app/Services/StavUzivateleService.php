<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

namespace App\Services;

use App\Models\StavUzivatele;
use PDO;
/**
 * Description of StavUzivateleService
 *
 * @author King
 */
class StavUzivateleService extends AService {

    public function getStavUzivateleById($id) {
        $sql = "
            SELECT * FROM StavUzivatele
            WHERE StavUzivatele.idStavUzivatele = ?";
        $stmt = $this->container->db->prepare($sql);
        $stmt->execute([$id]);
        $result = $stmt->fetch();
        return $this->assemblyDTO($result);
    }

    public function getAllStavUzivatele() {
        $sql = "
        SELECT * 
        FROM StavUzivatele";
        $stmt = $this->container->db->prepare($sql);
        $stmt->execute();
        $results = $stmt->fetchAll();

        $stavy = [];
        foreach ($results as $obj) {
            $s = $this->getStavUzivateleById($obj['idStavUzivatele']);
            $stavy[] = $s;
        }
        return $stavy;
    }

    protected function assemblyDTO($body) {
        if ($body == null) {
            return null;
        }
        //povinne
        if ($body['nazevStavu'] != null || $body['nazevStavu'] == "") {
            $nazevStavu = $body['nazevStavu'];
        } else {
            return null;
        }

        //ID
        $id = null;
        if (isset($body['idStavUzivatele'])) {
            if ($body['idStavUzivatele'] != null || $body['idStavUzivatele'] == "") {
                $id = $body['idStavUzivatele'];
            }
        }

        return new StavUzivatele($nazevStavu, $id);
    }

}
